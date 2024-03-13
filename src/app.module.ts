import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from "./users/user.service";
import { UserModule } from "./users/user.module";
import { MoviesModule } from "./Movies/movies.module";
import { CommentariesModule } from "./Commentary/commentaries.module";
import { MiddlewareModule } from "@nestjs/core/middleware/middleware-module";

@Module({
  imports: [UserModule, MoviesModule, CommentariesModule, MiddlewareModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
