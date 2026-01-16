import { Component } from '@angular/core';
import { ToDo } from '../to-do/to-do';
import { Diary } from '../diary/diary';
import { Login } from '../login/login';
import { MyAccount } from '../my-account/my-account';
import { UserInfo } from '../userinfo/userinfo';
import { Reactiveform } from '../reactiveform/reactiveform';
import { Templateform } from '../templateform/templateform';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
//retriveing data from parent to child using @Input decorator

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor (private router : Router){}
  Message_01 = '';
  Message_04 = '';
  //data from parent to child component
  @Input() username!: string;
  
  
  Dashboard(){
    this.Message_04 = `${this.username}'s Dashboard`;
    }
  ToDo(){
    this.router.navigate(['/todo']);
}
  Diary(){   
    this.router.navigate(['/diary']);
}
  Logout() {    
    this.router.navigate(['/login']);
    alert("Logged Out!");
  }
  MyAccount(){
    this.router.navigate(['/myaccount']);
  }
  GetService() {
    this.router.navigate(['/userinfo']);
  }
  ReactiveForm() {
    this.router.navigate(['/reactiveform']);
  }
  TemplateForm() {
    this.router.navigate(['/templateform']);
  }
}
