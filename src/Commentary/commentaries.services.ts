import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import { Commentary } from "./commentaries.entity";

@Injectable()
export class CommentariesService {


  private commentaries!: Commentary[];

  constructor() {
    const data = fs.readFileSync('./src/Commentary/commentaries.json', 'utf-8');
    this.commentaries = JSON.parse(data);
  }

  getCommByMovieId(idMovie: number): Commentary[] | null {
    const foundCommentary = this.commentaries.filter((commentary) => commentary.idMovie == idMovie);
    return foundCommentary;
  }

}