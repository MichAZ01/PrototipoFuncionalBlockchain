import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {

  flagHeader = false ;
  currentURL = "";
  constructor(private router: Router,private activeRoute :ActivatedRoute ) { }

  ngOnInit(): void {
    
  }

  

  changeHeader(){
    console.log(this.router.url);
      if(this.router.url == "/login"){
        this.flagHeader = !this.flagHeader;
      }else{
        this.flagHeader = !this.flagHeader;
      }  
  }

}
