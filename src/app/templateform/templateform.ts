import { Component } from '@angular/core';
import { Api } from '../api';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-templateform',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './templateform.html',
  styleUrl: './templateform.css',
})
export class Templateform {
  constructor(public apiService: Api,
  private router: Router) { }

  email = '';  
  feedback = '';
  message = '';

  posts: any[] = [];

  submit() {
    const data = {
      email: this.email,
      feedback: this.feedback
    };
    this.apiService.postfeedback(data).subscribe(
      (response: any) => {
        alert("Feedback received");
        return this.message = 'Feedback received!';
      },
      (error: any) => {        
        return this.message = 'Error: No Feedback received';
      }
    );
  }
  Menu() {
    this.router.navigate(['./menu']);
  }
  LoadPosts() {
    this.apiService.getposts().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        this.posts = response;
      }
    );
  }
}
