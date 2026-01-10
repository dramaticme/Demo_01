import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-my-account',
  imports: [],
  templateUrl: './my-account.html',
  styleUrl: './my-account.css',
})
export class MyAccount {
  Message_02 ='';
  Message_03 = '';
    @Input() username!: string;
    @Input() password!: string;
    MyAccount(){
      this.Message_02 =`Account Details: `;      
      this.Message_03 = `Username: ${this.username}
Password: ${this.password}`;
    }
}
