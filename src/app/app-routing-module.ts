import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signin } from './signin/signin';
import { Databinding } from './databinding/databinding';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'signin', component: Signin },
  { path: 'logout', component: Login },
  { path: 'databind', component: Databinding }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
