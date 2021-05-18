import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressInterceptor } from './progress.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ProgressInterceptor,
    multi: true,
  },
];
