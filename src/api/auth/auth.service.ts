import { Injectable } from '@nestjs/common';
import { StorageService } from '@app/storage';
import { DoLoginDto, DoSignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private storage: StorageService) {}

  doLogin(dto: DoLoginDto) {
    // this.userRepo.find()
  }

  doSignUp(dto: DoSignUpDto) {
    // this.userRepo.save()
  }
}
