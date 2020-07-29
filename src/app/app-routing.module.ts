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
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { TestComponent } from './pages/test/test.component';
import { CompetenciesPageComponent } from './pages/competencies-page/competencies-page.component';
import { CompAddCompetenciesComponent } from './pages/comp-add-competencies/comp-add-competencies.component';


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
    path: 'student/:id',
    component: StudentPageComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '',
    component: LoginPageComponent
    
  },
  {
    path: 'competencies/:id',
    component: CompetenciesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
