import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FevComponent } from './fev/fev.component';
import { MyPostComponent } from './my-post/my-post.component';
import { AllPostComponent } from './all-post/all-post.component';
import { FollowingComponent } from './following/following.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { Routeguard } from './auth/routeGaurd';

const routes: Routes = [
 
  {path:'home' ,component:HomeComponent },
  {path:'fev' ,component:FevComponent,canActivate:[Routeguard]},
  {path:'mypost' ,component:MyPostComponent,canActivate:[Routeguard]},
  {path:'allpost' ,component:AllPostComponent,canActivate:[Routeguard]},
  {path:'follow' ,component:FollowingComponent,canActivate:[Routeguard]},
  {path:'signin' ,component:SignInComponent},
  {path:'signup' ,component:SignUpComponent},
  {path:'', redirectTo:'home', pathMatch:'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
