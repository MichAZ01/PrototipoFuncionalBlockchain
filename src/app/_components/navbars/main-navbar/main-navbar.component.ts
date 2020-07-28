import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Employer } from 'src/app/models/employer.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  user : User;
  employer : Employer;
  public infoUser: String;
  
  users : Array<User>;
  employers : Array<Employer>;
  constructor(private activeRoute :ActivatedRoute,public authService: AuthService) { }

  ngOnInit(): void {
      this.getInfo(); 
  }

  getInfo(){
    this.activeRoute.params.subscribe(params =>{
      this.users= JSON.parse(localStorage.getItem("users")); 
      let id = params['id'];
      this.user = this.users.find( ({ identification }) => identification === id );
      if(this.user){
        this.infoUser = this.user.name+" "+this.user.lastname1;
      }else{
        this.employers= JSON.parse(localStorage.getItem("employers"));
        this.employer = this.employers.find( ({ email }) => email === id );
        this.infoUser = this.employer.companyName;
      }
    });
  }
  
}
