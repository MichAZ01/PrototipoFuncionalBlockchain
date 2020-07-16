import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Employer } from 'src/app/models/employer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginUserData = {"email": "","password": ""};
  user: User;
  employer : Employer;
  users : Array<User>;
  employers: Array<Employer>;
  errorFlag = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login(){
    
    this.users = JSON.parse(localStorage.getItem("users"));
    this.employers = JSON.parse(localStorage.getItem("employers"));
    
    this.user = this.users.find( ({ email }) => email === this.loginUserData.email );
    this.employer = this.employers.find( ({ email }) => email === this.loginUserData.email );
    if(this.user){
      if(this.user.password === this.loginUserData.password){
        if(this.user.accountType === "Estudiante"){

          this._router.navigate(['home']); // to user page
          console.log(this.loginUserData,"User to Student")
        }else{
          this._router.navigate(['home']); // to user page
          console.log(this.loginUserData,"User to Verificator")
        }
      }else{
        
        this.errorFlag = !this.errorFlag;
      setTimeout(function() {
        this.errorFlag = !this.errorFlag;   
      }.bind(this), 3000);
      }
    }else if(this.employer) {
      if(this.employer.password === this.loginUserData.password){
        this._router.navigate(['home']); // to employer page
        console.log(this.loginUserData,"User to employer")
      }else{
        this.errorFlag = !this.errorFlag;
      setTimeout(function() {
        this.errorFlag = !this.errorFlag;   
      }.bind(this), 3000);
      }
    } else{
      this.errorFlag = !this.errorFlag;
      setTimeout(function() {
        this.errorFlag = !this.errorFlag;   
      }.bind(this), 3000);
    }
  }

}
