import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Employer } from 'src/app/models/employer.model';


@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {

  flagHeader : boolean;

  user : User;
  employer : Employer;
  public infoUser: String;
  
  users : Array<User>;
  employers : Array<Employer>;
  constructor(private router: Router,private activeRoute :ActivatedRoute,public authService: AuthService) {

   }

  ngOnInit(): void {
      
     }



  changeHeaderLogin(){
    
    this.router.navigate(['/login']);
    this.flagHeader = false;
  }

  changeHeaderRegister(){ 
    this.router.navigate(['/register']);
    this.flagHeader = true;

  }

}
