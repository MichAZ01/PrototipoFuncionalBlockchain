import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { User } from './app/models/user.model';
import { Employer } from './app/models/employer.model';
import { Competencia } from './app/models/competencia.model';


  let student = new User();
  let verificator = new User();
  let employer = new Employer();
  let competencia = new Competencia();
  let users : Array<User> = [];
  let employers : Array<Employer> = [];
  let  date: Date = new Date();
  let competencias : Array<Competencia> = [];
  student.email = "student@gmail.com";
  student.password = "student1234";
  student.name = "Luis";
  student.lastname1 = "Molina";
  student.lastname2 = "Juárez";
  student.identification = "88888888";
  student.idType = "Cédula Nacional";
  student.birthday = date;
  student.phone = 22222222;
  student.recoverEmail = "checho@gmail.com";
  student.accountType = "Estudiante";
  users.push(student);
  verificator.email = "verificator@gmail.com";
  verificator.password = "verificator1234";
  verificator.name = "Adrián";
  verificator.lastname1 = "Mora";
  verificator.lastname2 = "Monge";
  verificator.identification = "88888888";
  verificator.idType = "Cédula Nacional";
  verificator.birthday = date;
  verificator.phone = 22222222;
  verificator.recoverEmail = "checho@gmail.com";
  verificator.accountType = "Verificador";
  users.push(verificator);
  competencia.email = "competencia@gmail.com";
  competencia.password = "compe1234";
  competencia.name = "Nicole";
  competencia.lastname1 = "Garita";
  competencia.lastname2= "Zuñiga";
  competencia.idType = "Pasaporte";
  competencia.id = "12345678";
  competencias.push(competencia);
  localStorage.setItem("users",JSON.stringify(users)); /// set in local storage default student and verificator
  localStorage.setItem("competencias",JSON.stringify(competencias)); /// set in local storage default student and verificator
  employer.companyName = "Industrias Zapateria S.A";
  employer.email = "zapateria@gmail.com";
  employer.password = "zapa1234";
  employers.push(employer);
  localStorage.setItem("employers",JSON.stringify(employers)); /// set in local storage default employer   

if (environment.production) {
  
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
