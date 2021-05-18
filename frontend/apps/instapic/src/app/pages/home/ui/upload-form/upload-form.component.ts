import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UploadUsecase } from './upload.usecase';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UploadUsecase],
})
export class UploadFormComponent {
  description = '';
  file: File;

  get fileAnchorLabel() {
    return this.file?.name || 'Click to choose a file';
  }

  constructor(private uploadUsecase: UploadUsecase) {}

  upload() {
    if (!this.file) {
      return;
    }
    this.uploadUsecase.upload({
      file: this.file,
      description: this.description,
    });
  }
}
