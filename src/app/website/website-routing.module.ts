import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PackagesComponent } from './packages/packages.component';
import { MarketingPlaceComponent } from './marketing-place/marketing-place.component';
import { VideoMadeComponent } from './video-made/video-made.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  { path: 'landingpage', component: LandingpageComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'packages', component: PackagesComponent},
  { path: 'marketingplace', component: MarketingPlaceComponent},
  { path: 'videomade', component: VideoMadeComponent},
  { path: 'Graphicdesign', component: GraphicDesignComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
