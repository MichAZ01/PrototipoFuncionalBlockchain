import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-addcomp',
  templateUrl: './student-addcomp.component.html',
  styleUrls: ['./student-addcomp.component.scss']
})
export class StudentAddcompComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goTest() {
    this.router.navigate(['test']);
  }
}
