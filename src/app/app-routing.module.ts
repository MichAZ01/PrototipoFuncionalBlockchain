import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentAddcompComponent } from './pages/student-addcomp/student-addcomp.component';
import { StudentCompComponent } from './pages/student-comp/student-comp.component';
import { TestComponent } from './pages/test/test.component';


const routes: Routes = [
  {
    path : 'login',
    component : LoginPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'student',
    component: StudentPageComponent
  },
  {
    path: 'student-comp',
    component: StudentCompComponent
  },
  {
    path: 'student-addcomp',
    component: StudentAddcompComponent
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
