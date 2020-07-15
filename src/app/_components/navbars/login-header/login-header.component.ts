import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {

  flagHeader = false ;
  constructor() { }

  ngOnInit(): void {
  }

  changeHeader(){
    this.flagHeader = !this.flagHeader;
    console.log(this.flagHeader)
  }

}
