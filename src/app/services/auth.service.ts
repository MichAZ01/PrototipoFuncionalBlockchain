import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _router: Router) { }

  loggedIn(){
    
    return !!localStorage.getItem('token')
    
  }

  logoutUser(){
    localStorage.removeItem('token')
    
    this._router.navigate(['/login'])
  }
}