import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { entityProviders } from './entities';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './routing';
import { HomeUiModule } from './ui';

@NgModule({
  declarations: [HomeComponent],
  providers: [...entityProviders],
  imports: [CommonModule, HomeUiModule, HomeRoutingModule],
})
export class HomeModule {}
