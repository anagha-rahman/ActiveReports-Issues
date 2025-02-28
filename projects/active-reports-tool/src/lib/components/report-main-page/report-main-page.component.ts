import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { exportsSettings, drillDown, fontFamily } from '../../core/config';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingScriptFilesService } from '../../services/loading-script-files.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject, Observable } from 'rxjs';
declare const MESCIUS: any;

@Component({
  selector: 'lib-report-main-page',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule, RouterLink, FormsModule],
  providers: [LoadingScriptFilesService],
  templateUrl: './report-main-page.component.html',
  styleUrls: ['./report-main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class ReportMainPageComponent implements OnInit {

  counter: number = 0;
  showDialog = false;
  isFilterFormVisible: boolean = true;
  isSaveFormVisible: boolean = false;
  viewerInstanceSubscription: any;
  designerInstanceSubscription: any;
  reportDefinition: any;
  viewerInstance: any;
  designerInstance: any;
  form!: FormGroup;
  saveForm!: FormGroup;
  openReportSubj = new Subject<any>();
  openReportObs = this.openReportSubj as Observable<string>;
  reportStorage = new Map();
  selectedButton: string = '';

  designButton: any = {
    key: "$openDesigner",
    text: "Edit in Designer",
    iconCssClass: "mdi mdi-pencil",
    enabled: true,
    action: () => {
      this.setVisibility("#viewer-host", false);
      this.setVisibility("#designer-host", true);
      this.isFilterFormVisible = false;
      this.isSaveFormVisible = true;
      if (this.selectedButton == "drillDownReport") {
        this.onLoadFromDefinitionDrillDown();
      }
      else {
        this.onLoadFromDefinitionFont();
      }
      this._changeDetectorRef.detectChanges();
    },
  };

  constructor(
    private _scriptLoaderService: LoadingScriptFilesService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.checkScriptsLoaded();
  }

  checkScriptsLoaded(): void {
    this._scriptLoaderService.scriptsLoaded$().subscribe((loaded) => {
      if (loaded) {
        this.fontsConfiguration();
        this.initializeReportViewer();
        this.initializeReportDesigner();
      }
    });
  }

  initializeReportViewer(): void {
    this.viewerInstanceSubscription = this._scriptLoaderService.getViewerLib().subscribe({
      next: () => {
        this.viewerInstance = new MESCIUS.ActiveReportsJS.ReportViewer.Viewer("#viewer-host", {
          ExportsSettings: exportsSettings
        });
        this.fontsConfiguration();
        this.viewerInstance.toolbar.addItem(this.designButton);
        this.viewerInstance.toolbar.updateLayout({
          default: [
            "$openDesigner", "$split", "$navigation", "$split", "$refresh", "$split", "$history", "$split",
            "$zoom", "$fullscreen", "$split", "$print", "$split", "$singlepagemode", "$continuousmode",
            "$galleymode",
          ],
        });
        this.viewerInstance.availableExports = [];
      },
      error: (err: any) => {
        console.error("Error loading viewer:", err);
      },
    });
  }

  setVisibility(elementId: string, isVisible: boolean): void {
    const element = document.querySelector(elementId) as HTMLElement;
    if (element) {
      element.style.display = isVisible ? 'block' : 'none';
    }
  }

  initializeReportDesigner(): void {
    this.designerInstanceSubscription = this._scriptLoaderService.getDesignerLib().subscribe({
      next: () => {
        // Create the ReportDesigner instance
        this.designerInstance = new MESCIUS.ActiveReportsJS.ReportDesigner.Designer("#designer-host");
        this.designerInstance.setActionHandlers({

          onCreateReport: () => {
            const reportId = `NewReport${++this.counter}`;
            const CPLReport = {
              Name: "Report",
              Body: {
                Width: "8.5in",
                Height: "11in",
              },
            };
            return Promise.resolve({
              definition: CPLReport,
              id: reportId,
              displayName: reportId,
            });
          },
          onOpen: () => {
            return new Promise<any>((resolve) => {
              const subscription = this.openReportObs.subscribe((reportId: string) => {
                subscription.unsubscribe();
                if (reportId) {
                  resolve({
                    definition: this.reportStorage.get(reportId),
                    id: reportId,
                    displayName: reportId,
                  });
                }
                else {
                  resolve(null);
                }
                this.showDialog = false;
              });
              this.showDialog = true;
            });
          },

          onSave: (info: { id: string; definition: any; }) => {
            const reportId = info.id || `NewReport${++this.counter}`;
            this.reportStorage.set(reportId, info.definition);
            console.log(info.definition);
            return Promise.resolve({ displayName: reportId });
          },
          onSaveAs: function (info: { definition: any; }) {
            const reportId = `NewReport${++this.counter}`;
            this.reportStorage.set(reportId, info.definition);
            console.log(info.definition);
            return Promise.resolve({ id: reportId, displayName: reportId });
          },

          onRender: async (report: { definition: any; }) => {
            this.setVisibility("#viewer-host", true);
            this.setVisibility("#designer-host", false);
            this.isFilterFormVisible = true;
            this.isSaveFormVisible = false;
            this._changeDetectorRef.detectChanges();
            this.viewerInstance.open(report.definition);
            return Promise.resolve();
          },
        });
      },
      error: (err: any) => {
        console.error("Error loading designer:", err);
      },
    });
  }

  //View the component on search
  async drillDownReportSearch() {
    this.selectedButton = 'drillDownReport';
    this.setVisibility("#viewer-host", true);
    this.setVisibility("#designer-host", false);
    this.viewerInstance.open(drillDown);
  }

  async fontReportSearch() {
    this.selectedButton = 'fontReport';
    this.setVisibility("#viewer-host", true);
    this.setVisibility("#designer-host", false);
    this.viewerInstance.open(fontFamily);
    console.log(this.viewerInstance)
  }

  async onLoadFromDefinitionDrillDown() {
    try {
      this.reportDefinition = drillDown;
      this.designerInstance.setReport({ definition: this.reportDefinition });
    } catch (error) {
      console.error("Error loading report:", error);
    }
  }

  async onLoadFromDefinitionFont() {
    try {
      this.reportDefinition = fontFamily;
      this.designerInstance.setReport({ definition: this.reportDefinition });
    } catch (error) {
      console.error("Error loading report:", error);
    }
  }
  fontsConfiguration(): void {
    const fontsInstance = new MESCIUS.ActiveReportsJS.Core.FontStore.registerFonts("/assets/fontsConfig.json")
  }

  onCloseDialog = () => {
    this.openReportSubj.next(null);
  }

  onSelectReport(report: string) {
    this.openReportSubj.next(report);
  }
}
