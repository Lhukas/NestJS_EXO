type User = {
    username: string;
    created: Date;
};
export declare class UserService {
    getHello(): string;
    getUser(username: string): User;
}
export {};
