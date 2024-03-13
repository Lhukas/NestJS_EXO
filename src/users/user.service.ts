import { Injectable } from '@nestjs/common';


type User = {
  username : string;
  created : Date;
}
@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(username : string): User {
    return {
      username,
      created : new Date(),
    }
  }
}