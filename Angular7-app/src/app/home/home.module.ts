import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ServicesComponent, TeamComponent, ContactUsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
