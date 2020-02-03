import { Title } from "@angular/platform-browser";
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorLogin: boolean = false;
  emailErrors: boolean = false;

  constructor(
    private _titleService: Title,
    private formBuilder: FormBuilder,
    private router: Router,
    private userDataService: DataService
  ) { }

  ngOnInit() {
    this._titleService.setTitle('WalletHub | Login');
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      password: ['', Validators.minLength(3)]
    });

  }

  get loginform() { return this.loginForm.controls }

  //allow only number 
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

      return false;
    }
    return true;
  }

  ////on submit login form
  submitForm(formValue: any) {

    if (this.emailErrors) {
      return;
    }

    if (formValue) {
      if (formValue.email == 'admin@yopmail.com' && formValue.password == '123') {

        sessionStorage.setItem('loggedInUser', 'admin');
        this.userDataService.setLoggedInStatus(true);
        this.router.navigate(['/dashboard']);
      } else {
        this.errorLogin = true;
      }
    }

  }

}