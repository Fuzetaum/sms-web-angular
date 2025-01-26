import { ApplicationConfig, Component, provideZoneChangeDetection } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';

import { bootstrapApplication } from '@angular/platform-browser';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync()]
};

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  imports: [RouterOutlet],
})
class AppRoot {}

bootstrapApplication(AppRoot, appConfig)
  .catch((err) => console.error(err));
