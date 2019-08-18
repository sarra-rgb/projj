import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import { HomeListComponent } from './home-list/home-list.component';
import {HomeService} from "./services/home.service";
import { HomeList2Component } from './home-list2/home-list2.component';
import { HomeList3Component } from './home-list3/home-list3.component';
import {Home2Service} from "./services/home2.service";
import {Home3Service} from "./services/home3.service";
const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'home', canActivate:[AuthGuardService] , component: HomeListComponent },
  { path: 'home2', canActivate:[AuthGuardService] , component: HomeList2Component },
  { path: 'home3', canActivate:[AuthGuardService] , component: HomeList3Component },

  {path: '' , redirectTo : 'home' , pathMatch: 'full'},
  {path: '**' , redirectTo : 'home'},
  {path: '' , redirectTo : 'home2' , pathMatch: 'full'},
  {path: '**' , redirectTo : 'home2'},
  {path: '' , redirectTo : 'home3' , pathMatch: 'full'},
  {path: '**' , redirectTo : 'home3'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    HomeListComponent,
    HomeList2Component,
    HomeList3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    HomeService,
    Home2Service,
    Home3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
