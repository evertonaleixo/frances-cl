
export class UserService {
    name: string;

    setName(name: string) {
        this.name = name;
    }

}

export const userService = new UserService();
