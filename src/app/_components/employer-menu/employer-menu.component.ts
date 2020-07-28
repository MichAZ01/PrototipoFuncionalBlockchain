import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerComponent } from 'src/app/pages/employer/employer.component';
@Component({
  selector: 'app-employer-menu',
  templateUrl: './employer-menu.component.html',
  styleUrls: ['./employer-menu.component.scss']
})
export class EmployerMenuComponent implements OnInit {
  flagHeader : number;
  constructor(private employer: EmployerComponent) {
    if(employer.flag){
      this.flagHeader=0;
    }
    else{
      this.flagHeader=1;
    }
   }

  ngOnInit(): void {
  }

  changeName(){
    this.flagHeader=1;
    this.employer.flag=false;
  }

  changeCompetencia(){
    this.flagHeader=0;
    this.employer.flag=true;
  }

}
