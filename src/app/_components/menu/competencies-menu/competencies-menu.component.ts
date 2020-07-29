import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetenciesPageComponent } from 'src/app/pages/competencies-page/competencies-page.component';

@Component({
  selector: 'app-competencies-menu',
  templateUrl: './competencies-menu.component.html',
  styleUrls: ['./competencies-menu.component.scss']
})
export class CompetenciesMenuComponent implements OnInit {
  flagHeader : number;

  constructor(private router: Router,private activeRoute :ActivatedRoute, private competenciesPC: CompetenciesPageComponent) { }

  ngOnInit(): void {
    if('/competencies-addStatements' == location.pathname.toString())
    this.flagHeader = 1;
    else
      this.flagHeader = 0;
  }

  changeCompetencies(){
    this.flagHeader = 0;
    this.competenciesPC.viewFlag = 0;
  }

  changeAddComp(){ 
    this.flagHeader = 1;
    this.competenciesPC.viewFlag = 1;
  }

}
