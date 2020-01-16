import { UsersData } from './users.data';
import { User } from './user.model';

export class UserRepository {
    usersData: UsersData

    constructor() {
      this.usersData = new UsersData();
    }

    getUsers(): User[] {
        return this.usersData.getUsers();
    }

    register(user: User) {
      this.usersData.addUser(user)
    }
}