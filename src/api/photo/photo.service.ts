import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@app/orm';
import { Photo } from '@app/entities';

@Injectable()
export class PhotoService {
  constructor(@InjectRepository(Photo) private photoRepo: Repository<Photo>) {}

  upload(photo: Express.Multer.File) {
    console.log('xxx: upload', photo);
  }
}
