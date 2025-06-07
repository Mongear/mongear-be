import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }
  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }
  @Get(":id")
  async getUserById(@Param() params: any) {
    try {
      return await this.userService.getUserById(params.id);
    } catch (e) {
      throw new HttpException("", HttpStatus.BAD_REQUEST);
    }
  }
}
