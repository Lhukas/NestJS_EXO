import { Module } from '@nestjs/common';
import { UserService } from "./user.service";
import { UserController } from "./user.controller";


@Module({
  exports:[UserService],
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
