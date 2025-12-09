import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signin } from './signin/signin';
import { Dashboard } from './dashboard/dashboard';
import { Xyz } from './xyz/xyz';
import { Databinding } from './databinding/databinding';
import { FormsModule } from '@angular/forms';
import { Directivedemo } from './directivedemo/directivedemo';

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    Signin,
    Dashboard,
    Xyz,
    Databinding,
    Directivedemo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
