import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import  { Menu } from '../menu/menu';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo {
  constructor (private router : Router) {}
  task: string[] =[];
  Message_07='';

  Add(){
    return this.Message_07='Task added!'
  }
  Menu(){
    return this.router.navigate(['/menu']);
  }
}
