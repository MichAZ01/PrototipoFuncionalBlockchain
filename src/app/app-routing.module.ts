import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompeRegisterComponent } from './pages/compe-register/compe-register.component';
import { StudentMenuComponent } from './_components/menu/student-menu/student-menu.component';
import { StudentComponent } from './pages/student/student.component';
import { VerificatorComponent } from './pages/verificator/verificator.component';
import { EmployerComponent } from './pages/employer/employer.component';
import { AuthGuard } from 'src/auth.guard';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { TestComponent } from './pages/test/test.component';


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
    path: 'verificator/:id',
    component: VerificatorComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'employer/:id',
    component: EmployerComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'student/:id',
    component: StudentPageComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
