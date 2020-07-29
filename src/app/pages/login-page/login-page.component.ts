import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Employer } from 'src/app/models/employer.model';
import { Router } from '@angular/router';
import { Competencia } from 'src/app/models/competencia.model';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginUserData = {"email": "","password": ""};
  user: User;
  employer : Employer;
  competencia : Competencia;
  competencias: Array<Competencia>;
  users : Array<User>;
  employers: Array<Employer>;
  errorFlag = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login(){
    
    this.users = JSON.parse(localStorage.getItem("users"));
    this.employers = JSON.parse(localStorage.getItem("employers"));
    this.competencias =  JSON.parse(localStorage.getItem("competencias"));
    
    this.user = this.users.find( ({ email }) => email === this.loginUserData.email );
    this.employer = this.employers.find( ({ email }) => email === this.loginUserData.email );
    this.competencia = this.competencias.find( ({ email }) => email === this.loginUserData.email );
    if(this.user){
      if(this.user.password === this.loginUserData.password){
        if(this.user.accountType === "Estudiante"){
          localStorage.setItem('token',this.user.identification.toString())
          this._router.navigate(['student/'+this.user.identification]); // to user page
        }else{
          localStorage.setItem('token',this.user.identification.toString())
          this._router.navigate(['verificator/'+this.user.identification]); // to user page
        }
      }else{
        
        this.errorFlag = !this.errorFlag;
      setTimeout(function() {
        this.errorFlag = !this.errorFlag;   
      }.bind(this), 3000);
      }
    }else if(this.employer) {
        if(this.employer.password === this.loginUserData.password){
          localStorage.setItem('token',this.employer.email.toString())
          this._router.navigate(['employer/'+this.employer.email]); // to employer page
        }else{
          this.errorFlag = !this.errorFlag;
        setTimeout(function() {
          this.errorFlag = !this.errorFlag;   
        }.bind(this), 3000);
      }
    }else if(this.competencia){
      if(this.competencia.password === this.loginUserData.password){
        localStorage.setItem('token',this.competencia.email.toString())
        this._router.navigate(['competencies/'+this.competencia.id]); // to competencies page
      }else{
        this.errorFlag = !this.errorFlag;
      setTimeout(function() {
        this.errorFlag = !this.errorFlag;   
      }.bind(this), 3000);
    }}else{
      this.errorFlag = !this.errorFlag;
      setTimeout(function() {
        this.errorFlag = !this.errorFlag;   
      }.bind(this), 3000);
    }
  }

}
