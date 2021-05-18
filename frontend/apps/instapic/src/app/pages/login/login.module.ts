import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './routing';
import { LoginUiModule } from './ui';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginUiModule, LoginRoutingModule],
})
export class LoginModule {}
