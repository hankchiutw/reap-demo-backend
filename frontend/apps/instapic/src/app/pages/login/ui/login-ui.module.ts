import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

const publicComponents = [LoginFormComponent];

@NgModule({
  declarations: [...publicComponents],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [...publicComponents],
})
export class LoginUiModule {}
