import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseurl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  postfeedback(data: any) {
    return this.http.post(`${this.baseurl}/posts`, data);
  }

  getposts() {
    return this.http.get(`${this.baseurl}/posts`)
  }
}
