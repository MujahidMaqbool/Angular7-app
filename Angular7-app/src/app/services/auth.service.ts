import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  isLoggedIn() {

    if (sessionStorage.getItem('loggedInUser') == 'admin') {
      return true;
    }

  }

  logout(): void {

    sessionStorage.removeItem('loggedInUser');

  }


}
