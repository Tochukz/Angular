import { User, Gender } from './user.model';

export class UsersData {
    // private user: Array<User>
    private users: User[];

    constructor() {
        this.users = Array<User>(
          new User(1, 'Mathew', 'Kelvin', 'mat.kelvin@yahoo.com', Gender.Male, 'Los Angelis'),
          new User(2, 'Marry', 'Emeka', 'm.emeka@gmail.com', Gender.Female, 'Lagos'),
          new User(3, 'Jude', 'Kelvin', 'judek@hotmail.com', Gender.Male, 'Mary Land')
        );
    }

    getUsers(): Array<User> {
      return this.users;
    }

    addUser(user: User) {
      user.Id = this.users.length + 1;
      this.users.push(user);
    }
}