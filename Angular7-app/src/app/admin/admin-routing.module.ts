import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserComponent, pathMatch: 'full' },
  {
    path: 'user',
    component: UserComponent,

    // children:[
    //   {path:'', component: UserComponent, pathMatch:'full'},
    //   {
    //     path:'create-user',
    //     component: CreateUserComponent
    //   },
    //   {
    //     path:'user-list',
    //     component: UserListComponent
    //   }

    // ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
