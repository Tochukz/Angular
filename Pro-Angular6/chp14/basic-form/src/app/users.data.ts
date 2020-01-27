import { User, Gender } from './user.model';

export class UsersData {
    private users: Array<User>
    //private users: User[]

    constructor() {
      this.users =Array<User>(
          new User(1, 'John', 'Sule', 'johnsule@gmail.com', Gender.Male, 'Cape Town'),
          new User(2, 'Mark', 'Will', 'mark.wiln@hmail.com',  Gender.Male),
          new User(3, 'Jane', 'Rufus', 'j.rufus@aol.com', Gender.Female,  'London'),
          new User(4, 'Maxwel', 'Luke', 'maxl@yahoo.com', null,  'Jerusalem')
      );
    }

    getUsers(): Array<User> {
        return this.users;
    }

    addUser(user: User) {
      user.id = this.users.length + 1;
      this.users.push(user);
    }
}