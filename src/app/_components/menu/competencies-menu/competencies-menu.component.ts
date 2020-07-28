import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-competencies-menu',
  templateUrl: './competencies-menu.component.html',
  styleUrls: ['./competencies-menu.component.scss']
})
export class CompetenciesMenuComponent implements OnInit {
  flagHeader : number;

  constructor(private router: Router,private activeRoute :ActivatedRoute) { }

  ngOnInit(): void {
    if('/competencies-addStatements' == location.pathname.toString())
    this.flagHeader = 1;
    else
      this.flagHeader = 0;
  }

  changeProfile(){
    //this.router.navigate(['student/'+localStorage.getItem("token")]);
    this.router.navigate(['competencies']);
    this.flagHeader = 0;
  }

  changeAddComp(){ 
    this.router.navigate(['competencies-addStatements']);
    this.flagHeader = 1;

  }

}
