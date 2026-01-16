import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  phno: number = 0;
  address: string = '';
  dob: Date | null = null;


}
