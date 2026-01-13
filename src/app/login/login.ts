import { Component } from '@angular/core';
import  { Menu } from '../menu/menu';
import { MyAccount } from '../my-account/my-account';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone : true,
  imports: [Menu, MyAccount, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password  = '';
  message = '';

  show = false;

  showPassword() {
    this.show = !this.show;
  }

  Login(){
    if( this.username.length >0 && this.password.length >0){
      this.message = 'Login Successful!' ;
      console.log("Username "+this.username+" LoggedIn!");
    }
    else{
      this.message = 'Error: Enter a Username and Password.';
    }
  }
}
