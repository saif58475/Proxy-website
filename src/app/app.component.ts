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

  style(){
    switch (localStorage.getItem('language')) {
      case "en":
        let allTags = document.getElementsByTagName("*");
        for (let i = 0; i < allTags.length; i++) {
          let tag = allTags[i];
          let classList = tag.classList;
          if (classList.contains("text-end")) {
            classList.replace("text-end", "text-start");
          }
        }
        break;
      case "ar":
        let allTagsar = document.getElementsByTagName("*");
      for (let i = 0; i < allTagsar.length; i++) {
        let tag = allTagsar[i];
        let classList = tag.classList;
        if (classList.contains("text-start")) {
          classList.replace("text-start", "text-end");
        }
      }
        break;
     
      default:
        let allTagsardefault = document.getElementsByTagName("*");
        for (let i = 0; i < allTagsardefault.length; i++) {
          let tag = allTagsardefault[i];
          let classList = tag.classList;
          if (classList.contains("text-start")) {
            classList.replace("text-start", "text-end");
          }
        }
        break;
    }
  }
  }
  



