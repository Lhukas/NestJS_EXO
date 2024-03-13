import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

  constructor(private userService : UserService) {}

  @Get(':username')
  getUser(@Param('username') username: string): {}{
    return this.userService.getUser(username)
  }

  @Post('user/add')
  postUser(@Body() user: any): {
    user: any;
  } {
    return {
      user: user.username,
    };
  }

}