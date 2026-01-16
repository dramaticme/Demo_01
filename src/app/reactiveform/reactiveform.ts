import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {

  constructor(private router: Router) { }
  message = '';
  myForm = new FormGroup({
    email: new FormControl(''),
    BugTitle: new FormControl(''),
    BugDescription: new FormControl('')
  });

  submit() {
    alert("Bug Submitted!");
    this.message = "Bug Submitted!";    
  }
  menu() {
    this.router.navigate(['./menu'])
  }

}
