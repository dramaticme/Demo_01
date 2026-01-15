import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Menu } from '../menu/menu';
import { Router } from '@angular/router';
//retriveing data from parent to child using @Input decorator
@Component({
  selector: 'app-my-account',
  imports: [],
  templateUrl: './my-account.html',
  styleUrl: './my-account.css',
})
export class MyAccount {
  constructor (private router : Router) {}
  
  Message_02 ='';
  Message_03 = '';
  //data from parent to child component
  @Input() username!: string;
  @Input() password!: string;

  MyAccount(){
     this.Message_02 =`Account Details: `;      
     this.Message_03 = `Username: ${this.username}
Password: ${this.password}`;
    }

  Menu(){
    return this.router.navigate(['/menu']);
  }
}
