import { AuthenticationService } from './../authentication/authentication.service';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto/create-user-dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
  ) {}
  @Post('create')
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }
  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }
  @Get('email')
  getUserByEmail(@Body('email') email: string) {
    return this.userService.getByEmail(email);
  }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }
}
