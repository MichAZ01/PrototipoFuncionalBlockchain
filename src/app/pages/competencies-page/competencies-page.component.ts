import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competencies-page',
  templateUrl: './competencies-page.component.html',
  styleUrls: ['./competencies-page.component.scss']
})
export class CompetenciesPageComponent implements OnInit {
  viewFlag: Number;

  constructor() {
    this.viewFlag = 0;
   }

  ngOnInit(): void {
  }

}
