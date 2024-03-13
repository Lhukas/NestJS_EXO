import { Controller, Get, Param } from "@nestjs/common";
import {MoviesService} from "./movies.service";
import { Movies } from "./movies.entity";


@Controller('movies')
export class MoviesController {

  constructor(private movieService : MoviesService) {}


  @Get('/')
  getMovies(): Movies[] {
    return this.movieService.getMovies();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Movies | null {
    return this.movieService.getById(id);
  }

  @Get('/addFavoris/:id')
  addFavoris(@Param('id') id: number): Movies {
    return this.movieService.addFavoris(id);
  }

  @Get('/removeFavoris/:id')
  removeFavoris(@Param('id') id: number): Movies {
    return this.movieService.removeFavoris(id);
  }


}