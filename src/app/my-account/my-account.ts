import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Menu } from '../menu/menu';
import { Router } from '@angular/router';

import { User } from '../user';
//retriveing data from parent to child using @Input decorator
@Component({
  selector: 'app-my-account',
  imports: [],
  templateUrl: './my-account.html',
  styleUrl: './my-account.css',
})
export class MyAccount {
  constructor(private router: Router,
  public userService: User) { }
  
  Message_02 ='';
  Message_03 = '';
  Message_04 = '';
  //data from parent to child component
  @Input() username!: string;
  @Input() password!: string;

  MyAccount(){
     this.Message_02 =`Phone number: ${this.userService.phno}`;      
    this.Message_03 = `Address: ${this.userService.address}`; 
    this.Message_04 = `DOB: ${this.userService.dob}`;
    }

  Menu(){
    return this.router.navigate(['/menu']);
  }
}
