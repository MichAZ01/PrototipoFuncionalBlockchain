import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss']
})
export class StudentMenuComponent implements OnInit {
  flagHeader : number;

  constructor(private router: Router,private activeRoute :ActivatedRoute) { }

  ngOnInit(): void {
    if('/student-comp' == location.pathname.toString())
      this.flagHeader = 1;
    else if('/student-addcomp' == location.pathname.toString())
    this.flagHeader = 2;
    else
      this.flagHeader = 0;
  }

  changeProfile(){
    //this.router.navigate(['student/'+localStorage.getItem("token")]);
    this.router.navigate(['student']);
    this.flagHeader = 0;
  }

  changeComp(){ 
    this.router.navigate(['student-comp']);
    this.flagHeader = 1;

  }

  changeAddComp(){ 
    this.router.navigate(['student-addcomp']);
    this.flagHeader = 2;

  }
}
