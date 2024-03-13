import { Movies } from "./movies.entity";
export declare class MoviesService {
    private movies;
    private IDnew;
    private newMovies;
    constructor();
    getMovies(): Movies[];
    getById(id: number): Movies | null;
    addFavoris(id: number): Movies | null;
    removeFavoris(id: number): Movies | null;
}
