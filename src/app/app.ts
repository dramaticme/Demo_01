import { Component } from '@angular/core';
import { Login } from './login/login';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterLink,
    HttpClientModule,
    FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
