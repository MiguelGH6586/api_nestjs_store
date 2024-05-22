import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '../../entities/user.entity';
import {
  CreateUserDto,
  UpdatePasswordUserDto,
  UpdateUserDto,
} from '../../dtos/users.dtos';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'Miguel',
      lastname: 'Garcia',
      user_tag: 'miguelgh',
      password: '12345',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(user_tag: string) {
    const user = this.users.find((item) => item.user_tag === user_tag);

    if (!user) {
      throw new NotFoundException(`User ${user_tag} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };

    this.users.push(newUser);
    return newUser;
  }

  updatePassword(user_tag: string, payload: UpdatePasswordUserDto) {
    const user = this.findOne(user_tag);
    if (!user) {
      throw new NotFoundException(`User ${user_tag} not found`);
    }

    if (!(user.password == payload.password)) {
      throw new BadRequestException(`Current password not correct`);
    }

    const index = this.users.findIndex((item) => item.user_tag === user_tag);
    this.users[index] = { ...user, password: payload.new_password };

    return this.users[index];
  }

  updateUser(user_tag: string, payload: UpdateUserDto) {
    const user = this.findOne(user_tag);
    if (!user) {
      throw new NotFoundException(`User ${user_tag} not found`);
    }

    const index = this.users.findIndex((item) => item.user_tag === user_tag);
    this.users[index] = { ...user, ...payload };

    return this.users[index];
  }

  remove(user_tag: string) {
    const index = this.users.findIndex((item) => item.user_tag === user_tag);
    if (index === -1) {
      throw new NotFoundException(`User ${user_tag} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
