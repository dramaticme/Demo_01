import { Component } from '@angular/core';
import { ToDo } from '../to-do/to-do';
import { Diary } from '../diary/diary';
@Component({
  selector: 'app-menu',
  imports: [ToDo, Diary],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  Message_01 = '';

  ToDo(){
    this.Message_01 = 'To-Do Component Loaded!';
}
  Diary(){
    this.Message_01 = 'Diary Component Loaded!';
}  
}
