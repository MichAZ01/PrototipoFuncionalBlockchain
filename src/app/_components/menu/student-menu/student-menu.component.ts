import { Component, OnInit } from '@angular/core';
import { StudentPageComponent } from 'src/app/pages/student-page/student-page.component';
@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.scss']
})
export class StudentMenuComponent implements OnInit {
  flagHeader : number;

  constructor(private studentC: StudentPageComponent) { }

  ngOnInit(): void {
    if('/student-comp' == location.pathname.toString())
      this.flagHeader = 1;
    else if('/student-addcomp' == location.pathname.toString())
      this.flagHeader = 2;
    else
      this.flagHeader = 0;
  }

  changeProfile(){
    this.studentC.viewFlag = 0;
    this.flagHeader = 0;
  }

  changeComp(){ 
    this.studentC.viewFlag = 1;
    this.flagHeader = 1;
  }

  changeAddComp(){ 
    this.studentC.viewFlag = 2;
    this.flagHeader = 2;
  }
}
