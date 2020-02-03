import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "services",
        component: ServicesComponent
      },
      {
        path: "team",
        component: TeamComponent
      },
      {
        path: "contactUs",
        component: ContactUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
