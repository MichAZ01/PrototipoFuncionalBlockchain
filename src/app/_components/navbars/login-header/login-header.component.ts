import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {

  flagHeader : boolean;
  currentURL = "";
  constructor(private router: Router,private activeRoute :ActivatedRoute ) { }

  ngOnInit(): void {    
    console.log(this.flagHeader,"BANDERA 1")
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
