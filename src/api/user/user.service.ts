import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { InjectRepository, Repository } from '@app/orm';
import { User } from '@app/entities';

export interface UserResource {
  id: number;
  username: string;
}

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  private get user(): User {
    return (this.req.session as Record<string, any>).user;
  }

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @Inject(REQUEST) private req: Request,
  ) {}

  findAll(): Promise<UserResource[]> {
    return this.userRepo.find({
      select: ['id', 'username'],
    });
  }
}
