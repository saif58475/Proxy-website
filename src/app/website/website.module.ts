import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { PackagesComponent } from './packages/packages.component';
import { MarketingPlaceComponent } from './marketing-place/marketing-place.component';
import { VideoMadeComponent } from './video-made/video-made.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { DesignpackagesComponent } from './designpackages/designpackages.component';
import { SeoComponent } from './seo/seo.component';
import { ManagecommunicationaccountComponent } from './managecommunicationaccount/managecommunicationaccount.component';
import { CampaignmanagmentComponent } from './campaignmanagment/campaignmanagment.component';
import { WebsitecodingComponent } from './websitecoding/websitecoding.component';
import { ProfessionallaunchpackagesComponent } from './professionallaunchpackages/professionallaunchpackages.component';
import { OrganizingandmanagingpartiesComponent } from './organizingandmanagingparties/organizingandmanagingparties.component';
import { DiscoveringandmanagingtalentComponent } from './discoveringandmanagingtalent/discoveringandmanagingtalent.component';
import { TrainingcoursesandworkshopsComponent } from './trainingcoursesandworkshops/trainingcoursesandworkshops.component';
import { SalesPackageComponent } from './packages/sales-package/sales-package.component';
import { DesignPackageComponent } from './packages/design-package/design-package.component';
import { ViideoProductionPackageComponent } from './packages/viideo-production-package/viideo-production-package.component';
import { CodingPackageComponent } from './packages/coding-package/coding-package.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MobilecodingComponent } from './mobilecoding/mobilecoding.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    WebsiteComponent,
    LandingpageComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    PackagesComponent,
    MarketingPlaceComponent,
    VideoMadeComponent,
    GraphicDesignComponent,
    DesignpackagesComponent,
    SeoComponent,
    ManagecommunicationaccountComponent,
    CampaignmanagmentComponent,
    WebsitecodingComponent,
    ProfessionallaunchpackagesComponent,
    OrganizingandmanagingpartiesComponent,
    DiscoveringandmanagingtalentComponent,
    TrainingcoursesandworkshopsComponent,
    SalesPackageComponent,
    DesignPackageComponent,
    ViideoProductionPackageComponent,
    CodingPackageComponent,
    MobilecodingComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  exports: [TranslateModule]
})
export class WebsiteModule { }
