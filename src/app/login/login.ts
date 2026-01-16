import { Component } from '@angular/core';
import  { Menu } from '../menu/menu';
import { MyAccount } from '../my-account/my-account';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  standalone : true,
  //Rendering another Compnnents inside this Component
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //Injecting Router and UserService
   constructor
     (private router: Router,// Dependency Injection
    ) { }
  // Varibles in Typescript
  /*
  1. String
  2. Number
  3. Boolean
  5. Array
  6. Date
  */

  // two-types of declarations
  //string
  Username : string = 'sakshi';
  USername ='sakshi';
  //number
  phno : number = 7249222700;
  Phno = 7249222700;
  //boolean
  IsEligible : boolean = true;
  Iseligible = true;
  //Date
  dob : Date = new Date();
  Dob = '2024-01-01';
  //Array

  winter : string[] = new Array();
  //Array Inbuild functions
  //push(), pop(), shift(), unshift(), splice()
  Summer : string[] = ['Sweater','Jacket'];
  username = '';
  password = '';  
  message = '';
  one_way = 'text';
  show = false;

  showPassword() {
    this.show = !this.show;
  }

  Login(){
    if( this.username.length >0 && this.password.length >0){
      this.message = 'Login Successful!' ;
      console.log("Username "+this.username+" LoggedIn!");
      this.router.navigate(['/menu']);
    }
    else{
      this.message = 'Error: Enter a Username and Password.';
    }
  }
}
