import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersRepository {

  users =  [
    {
      userId: 1,
      name: 'Maxwell James',
      city: 'Cape Town',
      job: 'Carpenter',
    },
    {
      userId: 2,
      name: 'Kelvin Smith',
      city: 'Johannesburg',
      job: 'Brick Layer',
    },
    {
      userId: 3,
      name: 'Mack Laughter',
      city: 'Laos',
      job: 'Designer'
    },
    {
      userId: 4,
      name: 'Peter Mustapha',
      city: 'Lagos',
      job: 'Taxi Driver',
    }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  findUser(userId: number): any {
    return this.users.find(usr => usr.userId == userId) || {}
  }

  addUser(user: any) {
    user.userId = this.users.length+1;
    this.users.push(user);
  }
}
