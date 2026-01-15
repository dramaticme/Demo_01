import { Routes } from '@angular/router';
import { ToDo } from './to-do/to-do';
import { Diary } from './diary/diary';
import  { Menu } from './menu/menu';
import { MyAccount } from './my-account/my-account';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path:'diary',
    component: Diary
  },
  {
    path:'login',
    component: Login
  },
  {
    path:'menu',
    component: Menu
  },
  {
    path:'myaccount',
    component: MyAccount
  },
  {
    path:'todo',
    component: ToDo
  }
];
