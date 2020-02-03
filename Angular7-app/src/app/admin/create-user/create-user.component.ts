import { Component, OnInit, OnChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateUserComponent implements OnInit, OnChanges {

  createUserForm: FormGroup;
  errorLogin: boolean = false;
  usersData: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userDataService: DataService
  ) { }

  ngOnChanges() {

  }
  ngOnInit() {

    this.createUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
    });

  }

  get loginform() { return this.createUserForm.controls }

  //allow only number 
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      //alert('Enter only numeric values');
      return false;
    }
    return true;
  }

  ////on Submit user form
  createNewUser(formValue: any): void {
    if (this.createUserForm.invalid) {
      return
    } else {
      this.usersData.push(formValue);
      this.userDataService.sendUserData(this.usersData);
      this.createUserForm.reset();
    }

  }

}
