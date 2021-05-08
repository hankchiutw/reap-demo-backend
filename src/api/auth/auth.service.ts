import { Injectable } from '@nestjs/common';
import { StorageService } from '@app/storage';

@Injectable()
export class AuthService {
  constructor(private storage: StorageService) {}

  doLogin() {}
}
