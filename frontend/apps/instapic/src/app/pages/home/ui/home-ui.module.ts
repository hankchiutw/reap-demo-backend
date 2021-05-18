import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PhotoNavComponent } from './photo-nav/photo-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

const publicComponents = [
  SidebarComponent,
  ToolbarComponent,
  PhotoNavComponent,
];

const privateComponents = [UploadFormComponent];

@NgModule({
  declarations: [...publicComponents, ...privateComponents],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...publicComponents],
})
export class HomeUiModule {}
