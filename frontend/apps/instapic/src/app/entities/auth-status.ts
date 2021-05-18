import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthStatus {
  user: User;

  public get authorized(): boolean {
    return !!this.user;
  }
}
