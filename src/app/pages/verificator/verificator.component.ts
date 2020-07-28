import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verificator',
  templateUrl: './verificator.component.html',
  styleUrls: ['./verificator.component.scss']
})
export class VerificatorComponent implements OnInit {
  constructor(private router: Router,private activeRoute :ActivatedRoute) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    
   }
   openComp(){ 
    this.router.navigate(['test']);
  }
}
