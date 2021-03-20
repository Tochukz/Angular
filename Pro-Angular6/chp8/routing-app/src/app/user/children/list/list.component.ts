import { Component, OnInit } from '@angular/core';

import { UsersRepository } from '../../../users.repository';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private usersRepository: UsersRepository) { }

  ngOnInit() {
  }

  get  users() {
    return this.usersRepository.getUsers();
  }
}
