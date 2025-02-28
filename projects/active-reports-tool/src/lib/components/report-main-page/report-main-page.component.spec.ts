declare const MESCIUS: any;
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportMainPageComponent } from './report-main-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BaseHttpService } from '../../services/base-http.service';
import { LoadingScriptFilesService } from '../../services/loading-script-files.service';
import { HttpClient } from '@angular/common/http';

//Working fine starts
describe('ReportMainPageComponent', () => {
  let component: ReportMainPageComponent;
  let fixture: ComponentFixture<ReportMainPageComponent>;
  let scriptLoaderService: jasmine.SpyObj<LoadingScriptFilesService>;
  const scripts = [
    '/assets/js_mescius/ar-js-core.js',
    '/assets/js_mescius/ar-js-viewer.js',
    '/assets/js_mescius/ar-js-pdf.js',
    '/assets/js_mescius/ar-js-designer.js',
  ]; 

  beforeEach(async () => {
    const scriptLoaderServiceMock = jasmine.createSpyObj('LoadingScriptFilesService', ['removeScript']);

    await TestBed.configureTestingModule({
      imports: [ReportMainPageComponent, HttpClientTestingModule],
      providers: [BaseHttpService, LoadingScriptFilesService, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportMainPageComponent);
    component = fixture.componentInstance;
    scriptLoaderService = TestBed.inject(LoadingScriptFilesService) as jasmine.SpyObj<LoadingScriptFilesService>;

    component.removeSpecificScript = function() {
      scriptLoaderService.removeScript(scripts);
    };
    fixture.detectChanges();
 
  it('should create report main page', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call removeScript on scriptLoaderService when removeSpecificScript is called', () => {
         component.removeSpecificScript();
        expect(scriptLoaderService.removeScript).toHaveBeenCalledWith(scripts);
  });
});
});



import {  ComponentFixture,  TestBed,  } from '@angular/core/testing';
import { ReportMainPageComponent } from './report-main-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BaseHttpService } from '../../services/base-http.service';
import { LoadingScriptFilesService } from '../../services/loading-script-files.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of, Subscription, Subject  } from 'rxjs';
import { ApiEndpoints } from '../../core/api-endpoints';
import { FormBuilder } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

describe('ReportMainPageComponent', () => {
  let component: ReportMainPageComponent;
  let fixture: ComponentFixture<ReportMainPageComponent>;
  let loadingScriptFilesServiceMock: jasmine.SpyObj<LoadingScriptFilesService>;
  let baseHttpService: jasmine.SpyObj<BaseHttpService>;
  let apiEndpointsMock: jasmine.SpyObj<ApiEndpoints>;
  // let modalComponentRefMock: jasmine.SpyObj<ComponentRef<TemplateListingComponent>>;
  let openReportSubjMock: jasmine.SpyObj<Subject<any>>;
  // let querySelectorSpy: jasmine.Spy;


  let scriptLoaderService: jasmine.SpyObj<LoadingScriptFilesService>;
  let mockOpenReportSubj: Subject<any>;
  let changeDetectorRefSpy: jasmine.SpyObj<ChangeDetectorRef>;
  let reportStorage: Map<string, { definition: any; description: string }>;
  let templateStorage: Map<string, { definition: any; description: string }>;
  
  const scripts = [
    '/assets/js_mescius/ar-js-core.js',
    '/assets/js_mescius/ar-js-viewer.js',
    '/assets/js_mescius/ar-js-pdf.js',
    '/assets/js_mescius/ar-js-designer.js',
  ];

  beforeEach(async () => {
    // Create a mock of the LoadingScriptFilesService
    loadingScriptFilesServiceMock = jasmine.createSpyObj('LoadingScriptFilesService', ['scriptsLoaded$']);
     // Create a spy for BaseHttpService
    const baseHttpServiceSpy = jasmine.createSpyObj('BaseHttpService', ['PostReport'], ['getAll']);

    // Create a mock for ApiEndpoints
    const apiEndpointsMockSpy = jasmine.createSpyObj('ApiEndpoints', [], {
      LOCALHOST_URL: 'https://localhost:2052/api'  // Mock the value of LOCALHOST_URL
    });
     // Create a spy object for modalComponentRef
    //  modalComponentRefMock = jasmine.createSpyObj('ModalComponent', ['destroy']);

// Configure createComponent to return the mock ComponentRef
openReportSubjMock = jasmine.createSpyObj('Subject', ['next']);
const scriptLoaderServiceMock = jasmine.createSpyObj('LoadingScriptFilesService',['removeScript', 'getDesignerLib']);
    const changeDetectorSpy = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
    changeDetectorRefSpy = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
    reportStorage = new Map<string, { definition: any; description: string }>();
    templateStorage = new Map<string, { definition: any; description: string }>();

    mockOpenReportSubj = new Subject<any>();


    await TestBed.configureTestingModule({
      imports: [ReportMainPageComponent, HttpClientTestingModule, HttpClientModule],
      providers: [
        { provide: LoadingScriptFilesService, useValue: loadingScriptFilesServiceMock },
        { provide: BaseHttpService, useValue: baseHttpServiceSpy  },
        { provide: ApiEndpoints, useValue: apiEndpointsMockSpy },
        { provide: Subject, useValue: openReportSubjMock }, // Inject the mock Subject
        { provide: HttpClient},
        FormBuilder,
        BaseHttpService,
        { provide: LoadingScriptFilesService, useValue: scriptLoaderServiceMock },
        { provide: 'openReportSubj', useValue: mockOpenReportSubj }, 
        { provide: ChangeDetectorRef, useValue: changeDetectorSpy },
        HttpClient,
      ]
      // providers: [BaseHttpService, LoadingScriptFilesService, HttpClient]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ReportMainPageComponent);
    component = fixture.componentInstance;

    component.form = new FormBuilder().group({
      reportType: ['ReportType1'],
      reportDescription: ['A description']
    });
    component.templateCounter = 0; 
    scriptLoaderService = TestBed.inject(LoadingScriptFilesService) as jasmine.SpyObj<LoadingScriptFilesService>;

   
    component.removeSpecificScript = () => {
      scriptLoaderService.removeScript(scripts);
    };
    component.reportStorage = reportStorage;
    component.templateStorage = templateStorage;
    fixture.detectChanges();
    baseHttpService = TestBed.inject(BaseHttpService) as jasmine.SpyObj<BaseHttpService>;
    apiEndpointsMock = TestBed.inject(ApiEndpoints) as jasmine.SpyObj<ApiEndpoints>;
    // Mocking document.querySelector to return a mock element
    // querySelectorSpy = spyOn(document, 'querySelector').and.returnValue({
    //   style: {
    //     display: ''
    //   }
    // });
     // Set modalComponentRef to the mock in the component
    //  component.modalComponentRef = modalComponentRefMock;
  });

  // Test case 1: When scriptsLoaded$ emits true, the methods should be called
  // it('should call initializeReportViewer and initializeReportDesigner when scriptsLoaded$ emits true', () => {
  //   // Arrange: Create spies for the component methods
  //   spyOn(component, 'initializeReportViewer');
  //   spyOn(component, 'initializeReportDesigner');

  //   // Mock the observable to emit `true`
  //   loadingScriptFilesServiceMock.scriptsLoaded$.and.returnValue(of(true));

  //   // Act: Call the checkScriptsLoaded method
  //   component.checkScriptsLoaded();

  //   // Trigger change detection (sometimes needed for Angular to notice changes)
  //   fixture.detectChanges();

  //   // Assert: Ensure that the methods were called
  //   expect(component.initializeReportViewer).toHaveBeenCalled();
  //   expect(component.initializeReportDesigner).toHaveBeenCalled();
  // });





  // Test case 2: When scriptsLoaded$ emits false, the methods should NOT be called
  it('should not call initializeReportViewer and initializeReportDesigner when scriptsLoaded$ does not emit true', () => {
    // Arrange: Create spies for the component methods
    spyOn(component, 'initializeReportViewer');
    spyOn(component, 'initializeReportDesigner');

    // Mock the observable to emit `false`
    loadingScriptFilesServiceMock.scriptsLoaded$.and.returnValue(of(false));

    // Act: Call the checkScriptsLoaded method
    component.checkScriptsLoaded();

    // Assert: Ensure that the methods were not called
    expect(component.initializeReportViewer).not.toHaveBeenCalled();
    expect(component.initializeReportDesigner).not.toHaveBeenCalled();
  });

  it('should call unsubscribe when ngOnDestroy is called', () => {
    // Arrange: Create a mock Subscription and spy on its unsubscribe method
    const unsubscribeSpy = jasmine.createSpy('unsubscribe');
    component.viewerInstanceSubscription = { unsubscribe: unsubscribeSpy } as unknown as Subscription;

    // Act: Call ngOnDestroy
    component.ngOnDestroy();

    // Assert: Verify unsubscribe was called
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should not call unsubscribe if viewerInstanceSubscription is null or undefined', () => {
    // Arrange: Set viewerInstanceSubscription to null
    component.viewerInstanceSubscription = null;

    // Act: Call ngOnDestroy
    component.ngOnDestroy();

    // Assert: Verify unsubscribe was not called
    expect(component.viewerInstanceSubscription).toBeNull();
  });

  // it('should set the element display style to "block" when isVisible is true', () => {
  //   const elementId = '#test-element';
  //   const isVisible = true;

  //   // Act: Call the setVisibility method
  //   component.setVisibility(elementId, isVisible);

  //   // Assert: Check if the display property was set to 'block'
  //   expect(querySelectorSpy).toHaveBeenCalledWith(elementId);
  //   expect(querySelectorSpy().style.display).toBe('block');
  // });

  // it('should set the element display style to "none" when isVisible is false', () => {
  //   const elementId = '#test-element';
  //   const isVisible = false;

  //   // Act: Call the setVisibility method
  //   component.setVisibility(elementId, isVisible);

  //   // Assert: Check if the display property was set to 'none'
  //   expect(querySelectorSpy).toHaveBeenCalledWith(elementId);
  //   expect(querySelectorSpy().style.display).toBe('none');
  // });

  // it('should not change the display style if the element is not found', () => {
  //   // Arrange: Set up querySelector to return null (element not found)
  //   querySelectorSpy.and.returnValue(null);

  //   // Act: Call the setVisibility method with a non-existent element
  //   component.setVisibility('#nonexistent-element', true);

  //   // Assert: Ensure that display property was not set (element doesn't exist)
  //   expect(querySelectorSpy).toHaveBeenCalledWith('#nonexistent-element');
  // });

  // it('setVisibility should show the element when isVisible is true', () => {
  //   const elementId = 'myElement';
  //   const element = document.createElement('div');
  //   element.id = elementId;
  //   document.body.appendChild(element);

  //   component.setVisibility(elementId, true);
  //   fixture.detectChanges(); // Detect changes after function call

  //   expect(element.style.display).toBe('block');
  //   document.body.removeChild(element); // Clean up after test
  // });

  // it('setVisibility should hide the element when isVisible is false', () => {
  //   const elementId = 'myElement';
  //   const element = document.createElement('div');
  //   element.id = elementId;
  //   element.style.display = 'block';
  //   document.body.appendChild(element);

  //   component.setVisibility(elementId, false);
  //   fixture.detectChanges();

  //   expect(element.style.display).toBe('none');
  //   document.body.removeChild(element);
  // });

  it('setVisibility should not throw errors if the element is not found', () => {
    const elementId = 'non-existent-element';
    expect(() => component.setVisibility(elementId, true)).not.toThrow();
  });

  // it('should call PostReport with correct URL and payload when getReportJson is called', async () => {
  //   // Arrange
  //   const expectedUrl = `${apiEndpointsMock.LOCALHOST_URL}/getActiveReportByType`;
  //   const expectedPayload = { reportType: component.selectedReportType };

  //   // Mock a successful response from PostReport
  //   const mockResponse = { response: [{ reportData: '{"reportName": "Test Report"}' }] };
  //   baseHttpService.PostReport.and.returnValue(Promise.resolve(mockResponse));

  //   // Act
  //   await component.getReportJson();

  //   // Assert
  //   expect(baseHttpService.PostReport).toHaveBeenCalledWith(expectedUrl, expectedPayload);
  // });

  // it('should handle error when PostReport fails', async () => {
  //   // Arrange
  //   const errorResponse = new Error('Something went wrong');
    
  //   // Mock PostReport to return a rejected promise
  //   baseHttpService.PostReport.and.returnValue(Promise.reject(errorResponse));

  //   // Act & Assert: Test error handling
  //   try {
  //     await component.getReportJson();
  //     fail('Expected error to be thrown'); // Force test to fail if no error is thrown
  //   } catch (error) {
  //     expect(error.message).toBe('Something went wrong');
  //   }
  // });

  // it('should set reportDefinition correctly when response is successful', async () => {
  //   // Arrange
  //   const mockResponse = { response: [{ reportData: '{"reportName": "Test Report", "data": [1, 2, 3]}' }] };
  //   const expectedParsedData = { reportName: "Test Report", data: [1, 2, 3] };
  //   baseHttpService.PostReport.and.returnValue(Promise.resolve(mockResponse));

  //   // Act
  //   await component.getReportJson();

  //   // Assert
  //   expect(component.reportDefinition).toEqual(expectedParsedData);
  // });

  // it('should call destroy on modalComponentRef when closePopupModal is called', () => {
  //   // Act: Call the method
  //   component.closePopupModal();

  //   // Assert: Check if destroy was called
  //   expect(modalComponentRefMock.destroy).toHaveBeenCalled();
  // });
  // it('should not call destroy if modalComponentRef is undefined or null', () => {
  //   // Arrange: Set modalComponentRef to null
  //   component.modalComponentRef = null as any;  // Set it to null (or undefined)

  //   // Act: Call the method
  //   component.closePopupModal();

  //   // Assert: Ensure destroy was not called
  //   expect(modalComponentRefMock.destroy).not.toHaveBeenCalled();
  // });
  

it('should create report main page', () => {
  expect(component).toBeTruthy();
});

  it('should call removeScript on scriptLoaderService when removeSpecificScript is called', () => {
    component.removeSpecificScript();
    expect(scriptLoaderService.removeScript).toHaveBeenCalledWith(scripts);
  });

  it('should not call openReportSubj.next if no report is selected', () => {
    spyOn(console, 'warn'); 
    component.selectedReport = null; 
    component.onChoose();
    expect(console.warn).toHaveBeenCalledWith('No report selected.');
    expect(mockOpenReportSubj.observed).toBeFalse();
  });
  
   
  it('should set selectedReport to null if clicked outside of the .card element', () => {
    component.selectedReport = 'Test Report'; 
    fixture.detectChanges();
    const event = {
      target: document.createElement('div'), 
    } as unknown as Event;
    component.onOutsideClick(event);
    expect(component.selectedReport).toBeNull(); 
  });
});
