import { Component, OnInit } from '@angular/core';

import { UsersRepository } from './../../../users.repository';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private usersRepository: UsersRepository) { }

  ngOnInit() {
  }

  addUser(event, nameTarget, cityTarget, jobTarget) {
    event.preventDefault();
    
    const targets = [nameTarget, cityTarget, jobTarget]
    const name = nameTarget.value;
    const city = cityTarget.value;
    const job = jobTarget.value;
    
    this.usersRepository.addUser({name, city, job});
    
    targets.forEach(ref => ref.value = '');
  }
}

