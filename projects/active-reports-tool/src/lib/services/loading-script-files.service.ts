import { Injectable } from '@angular/core';
import { Observable, of, mergeMap, tap, shareReplay, BehaviorSubject } from 'rxjs';
import { license } from '../core/config';
declare const MESCIUS: any;

@Injectable({
  providedIn: 'root'
})
export class LoadingScriptFilesService {
  coreLib: any;
  viewerLib: any;
  designerLib: any;
  pdfExportLib: any;

  scriptsLoaded = new BehaviorSubject<boolean>(false); // To track if all scripts are loaded

  constructor() {
    this.loadScriptsSequentially();
  }

  loadScript(path: string) {
    return new Observable((observer) => {
      const script = document.createElement('script');
      script.src = path;
      script.type = 'text/javascript';
      script.onload = () => {
        observer.next(path);
        observer.complete();
      };
      script.onerror = (error) => observer.error(error);

      document.head.appendChild(script);
    });
  }

  loadScriptsSequentially() {
    this.coreLib = of(`/assets/js_mescius/ar-js-core.js`).pipe(
      mergeMap((path) => this.loadScript(path)),
      tap(() => {
        MESCIUS.ActiveReportsJS.Core.setLicenseKey(license);
      }),
      shareReplay()
    );

    this.viewerLib = this.coreLib.pipe(
      mergeMap(() => this.loadScript(`/assets/js_mescius/ar-js-viewer.js`)),
      shareReplay()
    );

    
    this.pdfExportLib = this.viewerLib.pipe(
      mergeMap(() => this.loadScript(`/assets/js_mescius/ar-js-pdf.js`)),
      shareReplay()
      );


      this.designerLib = this.coreLib.pipe(
        mergeMap(() => this.loadScript(`/assets/js_mescius/ar-js-designer.js`)),
        shareReplay()
      );

    // When all scripts are loaded, emit true
    this.pdfExportLib.subscribe(() => {
      this.scriptsLoaded.next(true);
    });
  }


  // Provide public getters for the observables
  getCoreLib() {
    return this.coreLib;
  }

  getViewerLib() {
    return this.viewerLib;
  }

  getDesignerLib() {
    return this.designerLib;
  }

  getPdfExportLib() {
    return this.pdfExportLib;
  }
  scriptsLoaded$() {
    return this.scriptsLoaded.asObservable();
  }

}
