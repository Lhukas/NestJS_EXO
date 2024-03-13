import { Module } from '@nestjs/common';
import { CommentariesService } from "./commentaries.services";
import { CommentariesController} from "./commentaries.controller";


@Module({
  exports:[CommentariesService],
  imports: [],
  controllers: [CommentariesController],
  providers: [CommentariesService],
})
export class CommentariesModule {}