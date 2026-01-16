import { Component } from '@angular/core';

import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userinfo',
  imports: [],
  templateUrl: './userinfo.html',
  styleUrl: './userinfo.css',
})
export class UserInfo {
  constructor(public userService: User,
    private router: Router) { }

  Message_07 = '';

  save() {
    if (this.userService.phno > 0 && this.userService.address.length > 0 && this.userService.dob !== null) {
      alert("Details Added!")
      return this.Message_07 = 'Details Added!';
    }
    else {
      return this.Message_07= 'Error: Fill out all the Details'
    }
  }
  menu() {
    this.router.navigate(['/menu']);
  }

}
