import { Component, OnInit } from '@angular/core';
import { VerificatorProfileComponent } from 'src/app/pages/verificator-profile/verificator-profile.component';

@Component({
  selector: 'app-verificator-menu',
  templateUrl: './verificator-menu.component.html',
  styleUrls: ['./verificator-menu.component.scss']
})
export class VerificatorMenuComponent implements OnInit {
  flagHeader : number;

  constructor(private verificatorC: VerificatorProfileComponent) { }

  ngOnInit(): void {
    if('/verificator-comp' == location.pathname.toString())
      this.flagHeader = 1;
    else if('/verificator-addcomp' == location.pathname.toString())
    this.flagHeader = 2;
    else
      this.flagHeader = 0;
  }

  changeProfile(){
    this.verificatorC.viewFlag = 0;
    this.flagHeader = 0;
  }

  changeComp(){ 
    this.verificatorC.viewFlag = 1;
    this.flagHeader = 1;

  }

  changeAddComp(){ 
    this.verificatorC.viewFlag = 2;
    this.flagHeader = 2;

  }
}
