import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import {
  CreateUserDto,
  UpdatePasswordUserDto,
  UpdateUserDto,
} from 'src/dtos/users.dtos';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':userTag')
  getUser(@Param('userTag') userTag: string) {
    return this.usersService.findOne(userTag);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put('password/:userTag')
  updatePassword(
    @Param('userTag') userTag: string,
    @Body() payload: UpdatePasswordUserDto,
  ) {
    return this.usersService.updatePassword(userTag, payload);
  }

  @Put(':userTag')
  updateUser(
    @Param('userTag') userTag: string,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.updateUser(userTag, payload);
  }

  @Delete(':userTag')
  deleteUser(@Param('userTag') userTag: string) {
    return this.usersService.remove(userTag);
  }
}
