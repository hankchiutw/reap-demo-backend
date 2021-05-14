import { Injectable } from '@nestjs/common';
import { InjectRepository, Repository } from '@app/orm';
import { User } from '@app/entities';
import { DoLoginDto, DoSignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async doLogin(dto: DoLoginDto): Promise<string> {
    const user = await this.userRepo.findOne(dto);
    if (!user) {
      throw new Error('Wrong username/password pair');
    }
    return user.username;
  }

  async doSignUp(dto: DoSignUpDto): Promise<boolean> {
    const user = await this.userRepo.findOne({
      username: dto.username,
    });
    if (user) {
      throw new Error('The user already existed');
    }
    await this.userRepo.save(dto);
    return true;
  }
}
