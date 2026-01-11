import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';

import {providePrimeNG} from 'primeng/config';
import {theme} from './utils/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: theme
      },
      ripple: true,
      inputVariant: 'filled'
    })
  ]
};
