import { ApplicationConfig, Component, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { routes } from './app.routes';

const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

@Component({
  selector: 'body',
  template: '<p>Hello World!</p>',
})
class AppRoot {}

bootstrapApplication(AppRoot, appConfig)
  .catch((err) => console.error(err));
