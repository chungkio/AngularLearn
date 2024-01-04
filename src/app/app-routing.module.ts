import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

import { LoginRegisterComponent } from './login-register/login-register.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user',
    component: UserComponent ,
    children: [
      { path: 'listing', component: UserListComponent }
    ]
  },
  { path: 'account', component: LoginRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
