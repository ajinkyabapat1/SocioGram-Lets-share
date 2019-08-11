import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPostComponent } from './all-post/all-post.component';
import { FollowingComponent } from './following/following.component';
import { FevComponent } from './fev/fev.component';
import { MyPostComponent } from './my-post/my-post.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostComponent,
    FollowingComponent,
    FevComponent,
    MyPostComponent,
    SignInComponent,
   
    SignUpComponent,
   
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
