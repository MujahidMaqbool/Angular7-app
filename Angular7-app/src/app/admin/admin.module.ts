import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';


import { MycurrencyPipe } from '../pipe/mycurrency.pipe';
import { MycurrencyDirective } from '../directive/mycurrency.directive';



@NgModule({
  declarations: [
    UserComponent,
    CreateUserComponent,
    UserListComponent,
    MycurrencyPipe,
    MycurrencyDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [MycurrencyDirective, MycurrencyPipe]
})
export class AdminModule { }
