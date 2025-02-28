import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';


// bootstrapApplication(AppComponent, appConfig,)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Preserve existing providers
    importProvidersFrom(BrowserAnimationsModule), // Add animations module
    provideAnimations()
  ],
}).catch((err) => console.error(err));