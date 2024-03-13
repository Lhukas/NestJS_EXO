import { MoviesService } from "./movies.service";
import { Movies } from "./movies.entity";
export declare class MoviesController {
    private movieService;
    constructor(movieService: MoviesService);
    getMovies(): Movies[];
    getById(id: number): Movies | null;
    addFavoris(id: number): Movies;
    removeFavoris(id: number): Movies;
}
