import { Controller, Get, Param } from "@nestjs/common";
import {CommentariesService} from "./commentaries.services";
import { Movies } from "../Movies/movies.entity";
import { Commentary } from "./commentaries.entity";


@Controller('commentaries')
export class CommentariesController {

  constructor(private commentariesService : CommentariesService) {}


  @Get('/:IdMovie')
  getCommByMovieId(@Param('IdMovie') IdMovie: number): Commentary[] | null {
    return this.commentariesService.getCommByMovieId(IdMovie);
  }

}