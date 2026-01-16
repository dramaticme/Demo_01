import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import  { Menu } from '../menu/menu';

@Component({
  selector: 'app-diary',
  imports: [FormsModule],
  templateUrl: './diary.html',
  styleUrl: './diary.css',
})
export class Diary {
  constructor (private router : Router) {}
  title = '';
  Diary_Content = '';
  Message_06='';

  save(){
    console.log("Diary Add: " + this.title);
    alert("Diary saved!");
    return this.Message_06 = `Diary saved!`;
  }
  Menu(){
    return this.router.navigate(['/menu']);
  }
}
