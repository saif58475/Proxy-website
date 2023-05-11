import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { PackagesComponent } from './packages/packages.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    LandingpageComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    PackagesComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
