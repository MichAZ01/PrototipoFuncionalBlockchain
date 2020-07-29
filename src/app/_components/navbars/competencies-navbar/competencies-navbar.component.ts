import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competencia } from 'src/app/models/competencia.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-competencies-navbar',
  templateUrl: './competencies-navbar.component.html',
  styleUrls: ['./competencies-navbar.component.scss']
})
export class CompetenciesNavbarComponent implements OnInit {

  user : Competencia;
  public infoUser: String;
  
  users : Array<Competencia>;
  constructor(private activeRoute :ActivatedRoute,public authService: AuthService) { }

  ngOnInit(): void {
      this.getInfo(); 
  }

  getInfo(){
    this.activeRoute.params.subscribe(params =>{
      this.users= JSON.parse(localStorage.getItem("competencias")); 
      let id = params['id'];
      this.user = this.users.find( ({ id }) => id === id );
      if(this.user){
        this.infoUser = this.user.name+" "+this.user.lastname1;
      }
    });
  }
}
