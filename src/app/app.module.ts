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
import { VerificatorMenuComponent } from './_components/menu/verificator-menu/verificator-menu.component';
import { VerificatorProfileComponent } from './pages/verificator-profile/verificator-profile.component';
import { VerificatorAddCompComponent } from './pages/verificator-add-comp/verificator-add-comp.component';
import { EmployerMenuComponent } from './_components/employer-menu/employer-menu.component';
import { CompetenciesPageComponent } from './pages/competencies-page/competencies-page.component';
import { CompetenciesMenuComponent } from './_components/menu/competencies-menu/competencies-menu.component';
import { CompetenciesNavbarComponent } from './_components/navbars/competencies-navbar/competencies-navbar.component';
import { CompAddCompetenciesComponent } from './pages/comp-add-competencies/comp-add-competencies.component';

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
    TestComponent,
    VerificatorMenuComponent,
    VerificatorProfileComponent,
    VerificatorAddCompComponent,
    EmployerMenuComponent
    CompetenciesPageComponent,
    CompetenciesMenuComponent,
    CompetenciesNavbarComponent,
    CompAddCompetenciesComponent,
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
