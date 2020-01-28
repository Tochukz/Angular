import { User } from './user.model';
import { UsersData } from './users.data';

export class UserRepository {
    private userData: UsersData;

    constructor() {
      this.userData = new UsersData();
    }

    getUsers(): User[] {
      return this.userData.getUsers();
    }

    getUser(id: number): User {
      return this.getUsers().find(user => user.Id == id)
    }

    addUser(user: User) {
        this.userData.addUser(user);
    }

}