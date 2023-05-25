import { Component, ViewChild,OnInit, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  lang:boolean = false;
  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },{
    language: 'Arabic',
    code: 'ar',
    type: 'EG',
    icon: 'sa'
  },
 ]
  constructor(private translate:TranslateService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public changeLanguage(lang:boolean) {
    // this.lang = !this.lang;
    switch(lang) {
      case true:
      localStorage.setItem('language', 'en');
      document.body.dir = 'rtl';
      document.querySelector('nav')!.style.direction = 'ltr';
      this.setLanguage('en');
      this.translate.use('en');
      let allTags = document.getElementsByTagName("*");
      for (let i = 0; i < allTags.length; i++) {
        let tag = allTags[i];
        let classList = tag.classList;
        if (classList.contains("text-end")) {
          classList.replace("text-end", "text-start");
        }
      }
      break;
      case false:
       localStorage.setItem('language', 'ar');
       document.body.dir = 'ltr';
       document.querySelector('nav')!.style.direction = 'rtl';
       this.setLanguage('ar');
       this.translate.use('ar');
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
        alert('nothing');
    }
  }
  setLanguage(lang: string) {
    this.translate.use(lang);
  }
  
}
