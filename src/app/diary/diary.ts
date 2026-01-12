import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-diary',
  //standalone : true,
  imports: [FormsModule],
  templateUrl: './diary.html',
  styleUrl: './diary.css',
})
export class Diary {
  Title='';
  Diary_Content='';
}
