import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component'
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslateService]

})
export class AppComponent {
  title = 'proxywebsite';
 


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    translate: TranslateService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      translate.setDefaultLang("en");
      translate.addLangs(["en", "ar"]);
    }
  }

  }
  



