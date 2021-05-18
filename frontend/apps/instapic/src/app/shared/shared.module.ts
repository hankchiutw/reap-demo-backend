import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService, httpInterceptorProviders } from './api';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [ApiService, httpInterceptorProviders],
})
export class SharedModule {}
