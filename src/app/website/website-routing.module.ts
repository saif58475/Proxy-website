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
import { DesignpackagesComponent } from './designpackages/designpackages.component'
import { SeoComponent } from './seo/seo.component';
import { ManagecommunicationaccountComponent } from './managecommunicationaccount/managecommunicationaccount.component';
import { CampaignmanagmentComponent } from './campaignmanagment/campaignmanagment.component';
import { ProfessionallaunchpackagesComponent } from './professionallaunchpackages/professionallaunchpackages.component';
import { OrganizingandmanagingpartiesComponent } from './organizingandmanagingparties/organizingandmanagingparties.component';
import { DiscoveringandmanagingtalentComponent } from './discoveringandmanagingtalent/discoveringandmanagingtalent.component';
import { TrainingcoursesandworkshopsComponent } from './trainingcoursesandworkshops/trainingcoursesandworkshops.component';
import { WebsitecodingComponent } from './websitecoding/websitecoding.component';
import { SalesPackageComponent } from './packages/sales-package/sales-package.component';
import { ViideoProductionPackageComponent } from './packages/viideo-production-package/viideo-production-package.component';
import { CodingPackageComponent } from './packages/coding-package/coding-package.component';
import { DesignPackageComponent } from './packages/design-package/design-package.component';
import { MobilecodingComponent } from './mobilecoding/mobilecoding.component';
const routes: Routes = [
  // { path: '', component: WebsiteComponent },
  { path: '', component: LandingpageComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'packages', component: PackagesComponent},
  { path: 'marketingplace', component: MarketingPlaceComponent},
  { path: 'videomade', component: VideoMadeComponent},
  { path: 'Graphicdesign', component: GraphicDesignComponent},
  { path: 'designpackage', component: DesignpackagesComponent},
  { path: 'seo', component: SeoComponent},
  { path: 'comunicationaccount', component: ManagecommunicationaccountComponent},
  { path: 'campaignmanagment', component: CampaignmanagmentComponent},
  { path: 'websitecoding', component: WebsitecodingComponent},
  { path: 'professionallaunchpackages', component: ProfessionallaunchpackagesComponent},
  { path: 'organizingandmanagingparties', component: OrganizingandmanagingpartiesComponent},
  { path: 'discoveringandmanagingtalent', component: DiscoveringandmanagingtalentComponent},
  { path: 'trainingcoursesandworkshops', component: TrainingcoursesandworkshopsComponent},
  { path: 'salespackage', component: SalesPackageComponent},
  { path: 'videoproduction', component: ViideoProductionPackageComponent},
  { path: 'designpackages', component: DesignPackageComponent},
  { path: 'codingpackage', component: CodingPackageComponent},
  { path: 'mobilecoding', component: MobilecodingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
