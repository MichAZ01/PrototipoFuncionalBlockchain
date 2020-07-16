import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { User } from './app/models/user.model';
import { Employer } from './app/models/employer.model';

  let student = new User();
  let verificator = new User();
  let employer = new Employer();
  let users : Array<User> = [];
  let employers : Array<Employer> = [];
  let  date: Date = new Date();
  student.email = "student@gmail.com";
  student.password = "student1234";
  student.name = "Sergio";
  student.lastname1 = "Fonseca";
  student.lastname2 = "Segura";
  student.identification = "88888888";
  student.idType = "Cédula Nacional";
  student.birthday = date;
  student.phone = 22222222;
  student.recoverEmail = "checho@gmail.com";
  student.accountType = "Estudiante";
  users.push(student);
  verificator.email = "verificator@gmail.com";
  verificator.password = "verificator1234";
  verificator.name = "Armando";
  verificator.lastname1 = "Fonseca";
  verificator.lastname2 = "Segura";
  verificator.identification = "88888888";
  verificator.idType = "Cédula Nacional";
  verificator.birthday = date;
  verificator.phone = 22222222;
  verificator.recoverEmail = "checho@gmail.com";
  verificator.accountType = "Verificador";
  users.push(verificator);
  localStorage.setItem("users",JSON.stringify(users)); /// set in local storage default student
  employer.companyName = "Industrias Zapateria S.A";
  employer.email = "zapateria@gmail.com";
  employer.password = "zapa1234";
  employers.push(employer);
  localStorage.setItem("employers",JSON.stringify(employers)); /// set in local storage default student   

if (environment.production) {
  
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
