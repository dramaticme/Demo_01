import { Component } from '@angular/core';
import { ToDo } from '../to-do/to-do';
import { Diary } from '../diary/diary';
import { Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [ToDo, Diary],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  Message_01 = '';
  Message_04 = '';
  @Input() username!: string;
  
  Dashboard(){
    this.Message_04 = `${this.username}'s Dashboard`;
    }
  ToDo(){
    this.Message_01 = 'To-Do Component Loaded!';
}
  Diary(){
    this.Message_01 = 'Diary Component Loaded!';
}
}
