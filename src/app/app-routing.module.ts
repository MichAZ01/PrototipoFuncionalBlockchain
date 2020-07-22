import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompeRegisterComponent } from './pages/compe-register/compe-register.component';
import { StudentMenuComponent } from './_components/menu/student-menu/student-menu.component';
import { StudentComponent } from './pages/student/student.component';
import { VerificatorComponent } from './pages/verificator/verificator.component';
import { VerificatorProfileComponent } from './pages/verificator-profile/verificator-profile.component';
import { VerificatorAddCompComponent } from './pages/verificator-add-comp/verificator-add-comp.component';
import { EmployerComponent } from './pages/employer/employer.component';
import { AuthGuard } from 'src/auth.guard';


const routes: Routes = [
  {
    path : 'login',
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
  },
  {
    path: 'student/:id',
    component: StudentComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'verificator/:id',
    component: VerificatorProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'verificator-comp',
    component: VerificatorComponent,
    canActivate : [AuthGuard]
  },{
    path: 'verificator-addcomp',
    component: VerificatorAddCompComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'employer/:id',
    component: EmployerComponent,
    canActivate : [AuthGuard]
  },
  {
    path: '**',
    component: LoginPageComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
