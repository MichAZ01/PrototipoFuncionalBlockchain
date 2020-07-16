import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompeRegisterComponent } from './pages/compe-register/compe-register.component';


const routes: Routes = [
  {
    path : '',
    component : LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  
  {
    path: 'compeRegiter',
    component: CompeRegisterComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
