import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { InjectRepository, Repository } from '@app/orm';
import { Photo, User } from '@app/entities';
import { CreatePhotoDto } from './dto';

@Injectable({ scope: Scope.REQUEST })
export class PhotoService {
  private get user(): User {
    return (this.req.session as Record<string, any>).user;
  }

  constructor(
    @InjectRepository(Photo) private photoRepo: Repository<Photo>,
    @Inject(REQUEST) private req: Request,
  ) {}

  async create(dto: CreatePhotoDto): Promise<Photo> {
    return await this.photoRepo.save({
      ...dto,
      user: this.user,
    });
  }

  async findByUser(userId: number): Promise<Photo[]> {
    const photos = await this.photoRepo.find({
      relations: ['user'],
      where: {
        user: userId,
      },
    });
    return photos;
  }

  async findPath(photoId: number): Promise<string> {
    const { path } = await this.photoRepo.findOne({
      select: ['path'],
      where: {
        id: photoId,
      },
    });

    return path;
  }
}
