import { Injectable } from "@nestjs/common";
import { Movies } from "./movies.entity";
import * as fs from 'fs';


@Injectable()
export class MoviesService {

  private movies!: Movies[];
  private IDnew : number = 0
  private newMovies !: Movies

  constructor() {
    const data = fs.readFileSync('./src/Movies/movies.json', 'utf-8');
    this.movies = JSON.parse(data);
  }


  getMovies(): Movies[] {
    return this.movies;
    }

  getById(id: number): Movies | null {
    const foundMovie = this.movies.find((movie) => movie.id == id);
    return foundMovie || null;
  }

  addFavoris(id: number): Movies | null{

    const foundMovie = this.getById(id)

    foundMovie.favoris = "TRUE";
    fs.writeFileSync('./src/Movies/movies.json', JSON.stringify(this.movies, null, 2), 'utf-8');
    return foundMovie
  }

  removeFavoris(id: number): Movies | null{

    const foundMovie = this.getById(id)

    foundMovie.favoris = "FALSE";
    fs.writeFileSync('./src/Movies/movies.json', JSON.stringify(this.movies, null, 2), 'utf-8');
    return foundMovie
  }



}