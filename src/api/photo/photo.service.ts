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
    @InjectRepository(User) private userRepo: Repository<User>,
    @Inject(REQUEST) private req: Request,
  ) {}

  async create(dto: CreatePhotoDto): Promise<boolean> {
    await this.photoRepo.save({
      ...dto,
      user: this.user,
    });
    return true;
  }

  async findAll(): Promise<Photo[]> {
    const user = await this.userRepo.findOne({
      id: (this.req.session as Record<string, any>).user.id,
    });
    return user.photos;
  }
}
