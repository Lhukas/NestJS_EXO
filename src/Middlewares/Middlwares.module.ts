import { Module, MiddlewareConsumer } from '@nestjs/common';
import { notFoundMiddleware } from './general-middleware.middleware';
import { CommentariesController} from "../Commentary/commentaries.controller";

@Module({
  controllers: [CommentariesController],
})
export class CatsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(notFoundMiddleware).forRoutes('*');
  }
}
