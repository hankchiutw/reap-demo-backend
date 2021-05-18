import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeContext } from '../../entities';
import { UploadFormComponent } from '../upload-form/upload-form.component';

@Injectable()
export class ToolbarUsecase {
  constructor(private dialog: MatDialog, private context: HomeContext) {}

  openUploadForm() {
    this.dialog.open(UploadFormComponent);
  }

  setNewestFirst(value: boolean) {
    this.context.newestFirst$.next(value);
  }
}
