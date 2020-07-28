import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificator-profile',
  templateUrl: './verificator-profile.component.html',
  styleUrls: ['./verificator-profile.component.scss']
})
export class VerificatorProfileComponent implements OnInit {
  viewFlag: Number;
  constructor() { 
    this.viewFlag = 0;
  }

  ngOnInit(): void {
  }

}
