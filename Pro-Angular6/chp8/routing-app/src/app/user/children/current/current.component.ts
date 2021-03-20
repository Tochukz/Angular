import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { UsersRepository } from '../../../users.repository';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  user = {};

  constructor(
    private route: ActivatedRoute,  
    private userRepository: UsersRepository, 
    private router: Router,   
  ) { }

  ngOnInit() {      
    /*
    this.route.params.subscribe(param => {
      const userId = param.userId;
      this.user = this.userRepository.findUser(userId);
    });
    */
    
    const userId = this.route.snapshot.paramMap.get('userId');
    this.user = this.userRepository.findUser(parseInt(userId));
  }

  backToUsersList() {
    this.router.navigateByUrl('/users/list');
  }
}
