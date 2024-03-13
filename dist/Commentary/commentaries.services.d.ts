import { Commentary } from "./commentaries.entity";
export declare class CommentariesService {
    private commentaries;
    constructor();
    getCommByMovieId(idMovie: number): Commentary[] | null;
}
