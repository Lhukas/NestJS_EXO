import { Module } from '@nestjs/common';
import { MoviesService } from "./movies.service";
import { MoviesController } from "./movies.controller";


@Module({
  exports:[MoviesService],
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
