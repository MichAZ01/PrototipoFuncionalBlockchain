import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainNavbarComponent } from './_components/navbars/main-navbar/main-navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginHeaderComponent } from './_components/navbars/login-header/login-header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FooterComponent } from './_components/footer/footer.component';
import { StudentMenuComponent } from './_components/menu/student-menu/student-menu.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompeRegisterComponent } from './pages/compe-register/compe-register.component';
import { StudentComponent } from './pages/student/student.component';
import { VerificatorComponent } from './pages/verificator/verificator.component';
import { EmployerComponent } from './pages/employer/employer.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentAddcompComponent } from './pages/student-addcomp/student-addcomp.component';
import { StudentCompComponent } from './pages/student-comp/student-comp.component';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HomePageComponent,
    LoginHeaderComponent,
    LoginPageComponent,
    FooterComponent,
    StudentMenuComponent,
    RegisterComponent,
    CompeRegisterComponent,
    StudentComponent,
    VerificatorComponent,
    EmployerComponent,
    StudentPageComponent,
    StudentAddcompComponent,
    StudentCompComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
