import { NgModule } from '@angular/core';
import { entityProviders } from './entities';

@NgModule({
  providers: [...entityProviders],
})
export class HomeTestingModule {}
