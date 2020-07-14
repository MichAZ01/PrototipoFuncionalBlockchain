import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './_components/navbars/main-navbar/main-navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginHeaderComponent } from './_components/navbars/login-header/login-header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FooterComponent } from './_components/footer/footer.component';
import { StudentMenuComponent } from './_components/menu/student-menu/student-menu.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HomePageComponent,
    LoginHeaderComponent,
    LoginPageComponent,
    FooterComponent,
    StudentMenuComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
