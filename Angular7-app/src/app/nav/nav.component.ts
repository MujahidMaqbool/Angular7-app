import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isUserLogin: boolean = false;

  constructor(private userDataService: DataService) {


  }

  ngOnInit() {

    this.userDataService.userloggedIn.subscribe(loginStatus => this.isUserLogin = loginStatus);
  }

  logout(): void {

    sessionStorage.removeItem('loggedInUser');
    this.userDataService.setLoggedInStatus(false);
  }


}