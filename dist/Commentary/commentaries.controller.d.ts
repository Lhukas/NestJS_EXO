import { CommentariesService } from "./commentaries.services";
import { Commentary } from "./commentaries.entity";
export declare class CommentariesController {
    private commentariesService;
    constructor(commentariesService: CommentariesService);
    getCommByMovieId(IdMovie: number): Commentary[] | null;
}
