import { Injectable } from '@angular/core';
import { ApiService, ProcedurePath } from '@app/shared';
import { Observable } from 'rxjs';
import { HomeContext } from '../../entities';

interface UploadFileDto {
  file: File;
  description: string;
}

@Injectable()
export class UploadUsecase {
  constructor(private api: ApiService, private context: HomeContext) {}

  upload(dto: UploadFileDto) {
    this.uploadFile(dto).subscribe((result) => {
      const { completed, body } = result;
      if (completed) {
        const oldValue = this.context.myPhotos$.value;
        this.context.myPhotos$.next([...oldValue, body.result]);
      }
    });
  }

  private uploadFile(dto: UploadFileDto): Observable<any> {
    const { file, description } = dto;
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('description', description);

    return this.api.post(ProcedurePath.photoUpload, {
      body: formData,
      reportProgress: true,
    });
  }
}
