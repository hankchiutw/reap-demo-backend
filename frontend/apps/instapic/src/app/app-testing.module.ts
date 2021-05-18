import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { entityProviders } from './entities';
import { SharedModule } from './shared';

@NgModule({
  imports: [BrowserModule, HttpClientTestingModule, SharedModule],
  providers: [...entityProviders],
})
export class AppTestingModule {}
