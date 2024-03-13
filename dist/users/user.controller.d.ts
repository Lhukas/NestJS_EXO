import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(username: string): {};
    postUser(user: any): {
        user: any;
    };
}
