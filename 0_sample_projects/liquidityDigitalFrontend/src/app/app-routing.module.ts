import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { NewuserComponent } from './newuser/newuser.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userlisting',      component: UserlistingComponent },
  { path: 'newuser',      component: NewuserComponent},
  { path: 'updateuser', component: UpdateuserComponent },
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
