import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-diary',
  imports: [FormsModule],
  templateUrl: './diary.html',
  styleUrl: './diary.css',
})
export class Diary {
  title = '';
  Diary_Content = '';
  Message_06='';

  save(){
    console.log("Diary Add: "+ this.title);
    return this.Message_06=`Diary saved!`
  }
}
