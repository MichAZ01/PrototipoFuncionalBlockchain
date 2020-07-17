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

// getInfo(){
  
//   if(this.authService.loggedIn()){
//       this.users= JSON.parse(localStorage.getItem("users")); 
//       let id = localStorage.getItem("token");
//       console.log(this.users,id,"PANANAAAA")
//       this.user = this.users.find( ({ identification }) => identification === id );
//       if(this.user){
//         this.infoUser= this.user.name+" "+this.user.lastname1;
//       }else{
//         this.employers = JSON.parse(localStorage.getItem("employers"));
//         this.employer = this.employers.find( ({ email }) => email === id );
//         this.infoUser = this.employer.companyName;
//       }
//   }
// }


  changeHeaderLogin(){
    
    this.router.navigate(['/login']);
    this.flagHeader = false;
  }

  changeHeaderRegister(){
    
    this.router.navigate(['/register']);
    this.flagHeader = true;

  }

}
