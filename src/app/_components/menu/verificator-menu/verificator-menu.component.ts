import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verificator-menu',
  templateUrl: './verificator-menu.component.html',
  styleUrls: ['./verificator-menu.component.scss']
})
export class VerificatorMenuComponent implements OnInit {
  flagHeader : number;

  constructor(private router: Router,private activeRoute :ActivatedRoute) { }

  ngOnInit(): void {
    if('/verificator-comp' == location.pathname.toString())
      this.flagHeader = 1;
    else if('/verificator-addcomp' == location.pathname.toString())
    this.flagHeader = 2;
    else
      this.flagHeader = 0;
  }

  changeProfile(){
    this.router.navigate(['verificator/'+localStorage.getItem("token")]);
    this.flagHeader = 0;
  }

  changeComp(){ 
    this.router.navigate(['verificator-comp']);
    this.flagHeader = 1;

  }

  changeAddComp(){ 
    this.router.navigate(['verificator-addcomp']);
    this.flagHeader = 2;

  }
}
