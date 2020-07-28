import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.model";
import { Employer } from "../../models/employer.model";
import { Router } from '@angular/router';
import { Competencia } from 'src/app/models/competencia.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  studentFlag = false;
  public user = new User();
  public employer = new Employer();
  public competencia = new Competencia();
  errorPass = false;
  errorEmpty = false;
  errorReqInfo = false;
  passwordConfirm = {
    "passConfirm" : ""
  }
  

  constructor(private _router: Router) { }

  ngOnInit(): void {
      
  }

  registerCompe(){
    let competencias : Array<Competencia> = JSON.parse(localStorage.getItem("competencias"));
    
    if(this.competencia.email !== undefined){
      if(this.competencia.password === this.passwordConfirm.passConfirm){
        console.log(this.competencia,"registro completo compe")
        competencias.push(this.competencia);
        localStorage.setItem('token',this.competencia.email.toString())
        localStorage.setItem("competencias",JSON.stringify(competencias)); // set in local storage new employer
        
        //this._router.navigate(['competencia/'+this.employer.email]); // to employer page
      }else{
        this.errorPass = !this.errorPass
      }
    }else{
      this.errorReqInfo = !this.errorReqInfo;
      setTimeout(function() {
        this.errorReqInfo = !this.errorReqInfo;   
      }.bind(this), 3000);
      return false;
    }
  }

  registerUser(){
    let users : Array<User> = JSON.parse(localStorage.getItem("users"));
    if(this.user.name !== "" &&  this.user.lastname1 !== "" && this.user.identification !== ""
      && this.user.idType && this.user.accountType !== "" ){
      users.push(this.user);
      if(this.user.accountType === "Estudiante"){
        localStorage.setItem('token',this.user.identification.toString())
        localStorage.setItem("users",JSON.stringify(users)); // set in local storage new employer
        this._router.navigate(['student/'+this.user.identification]); // to user page student
      }else{
        localStorage.setItem('token',this.user.identification.toString())
        localStorage.setItem("users",JSON.stringify(users)); // set in local storage new employer
        this._router.navigate(['verificator/'+this.user.identification]); // to user page verificator
      }
    }else{
      this.errorReqInfo = !this.errorReqInfo;
      setTimeout(function() {
        this.errorReqInfo = !this.errorReqInfo;   
      }.bind(this), 3000);
      return false;
    }
    
  }

  registerEmployer(){
    let employers : Array<Employer> = JSON.parse(localStorage.getItem("employers"));
    console.log(this.employer,this.passwordConfirm.passConfirm,"12121212")
    if(this.employer.email !== undefined){
      if(this.verifyPassEmpty(this.employer)){
        employers.push(this.employer);
        localStorage.setItem('token',this.employer.email.toString())
        localStorage.setItem("employers",JSON.stringify(employers)); // set in local storage new employer
        this._router.navigate(['employer/'+this.employer.email]); // to employer page
      }
    }else{
      this.errorReqInfo = !this.errorReqInfo;
      setTimeout(function() {
        this.errorReqInfo = !this.errorReqInfo;   
      }.bind(this), 3000);
      return false;
    }
  }

  continueStudentReg(){
    this.verifyPassEmpty(this.user);
  }

  verifyPassEmpty(user: any){
    if(JSON.stringify(user) !== '{}'){
      if(user.password === this.passwordConfirm.passConfirm){
        this.studentFlag = !this.studentFlag;
        return true;
      }else{
        this.errorPass = !this.errorPass;
        setTimeout(function() {
          this.errorPass = !this.errorPass;   
      }.bind(this), 3000);
      }
      return false;
    }else{
      this.errorEmpty = !this.errorEmpty;
      setTimeout(function() {
        this.errorEmpty = !this.errorEmpty;   
      }.bind(this), 3000);
      return false;
    }  
  }
}
