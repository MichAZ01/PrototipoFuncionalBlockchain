import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  flag = false;
  constructor() { }

  ngOnInit(): void {
  }
  cambiarBandera(): void{
    this.flag = !this.flag;
  }

}
