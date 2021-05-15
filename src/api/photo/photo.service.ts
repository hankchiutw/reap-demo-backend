import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@app/orm';
import { Photo } from '@app/entities';
import { CreatePhotoDto } from './dto';

@Injectable()
export class PhotoService {
  constructor(@InjectRepository(Photo) private photoRepo: Repository<Photo>) {}

  create(dto: CreatePhotoDto) {
    return this.photoRepo.save(dto);
  }
}
