import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './common/auth/login.component';
import { SignUpComponent } from './signup/signup.component';
import { EventListComponent } from './event-list/event-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/users-list', component: UserListComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'events-list', component: EventListComponent},
  { path: 'admin/user-detail/:userId', component: UserDetailComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})

export class AppRoutingModule {}
