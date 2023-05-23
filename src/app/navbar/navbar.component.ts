import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
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
  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
  }

  public changeLanguage() {
    this.lang = !this.lang;
    switch(this.lang) {
      case true:
      localStorage.setItem('language', 'en');
      document.body.dir = 'rtl';
      document.querySelector('nav')!.style.direction = 'ltr';
      this.setLanguage('en');
      this.translate.use('en');
      break;
      case false:
       localStorage.setItem('language', 'ar');
       document.body.dir = 'ltr';
       document.querySelector('nav')!.style.direction = 'rtl';
       this.setLanguage('ar');
       this.translate.use('ar');
       break;
      default:
        alert('nothing');
    }
  }
  setLanguage(lang: string) {
    this.translate.use(lang);
  }
  
}
