import { Component, ViewChild,OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { AppComponent } from './../app.component';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;
  
  lang:boolean = false;
  page:string = '0';
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
 allElements:any [] = [];
  constructor(private translate:TranslateService, private renderer: Renderer2, private _AppComponent:AppComponent) { }

  ngOnInit(): void {
   this.checkthepage();
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
  displaydata(id:any){
    this._AppComponent.displaydata(id)
  }
  checkthepage(){
    switch(location.href.substring(location.href.lastIndexOf('/') + 1)){
    case 'aboutus' :
     this._AppComponent.displaydata(1);
     break;
     case 'services': 
     case 'marketingplace': 
     case 'Graphicdesign': 
     case 'videomade': 
     case 'websitecoding': 
     case 'mobilecoding': 
     case 'seo': 
     case 'comunicationaccount': 
     case 'campaignmanagment': 
     case 'professionallaunchpackages': 
     case 'organizingandmanagingparties': 
     case 'trainingcoursesandworkshops': 
     case 'discoveringandmanagingtalent': 
       this._AppComponent.displaydata(2);
     break;
     case 'packages':
     case 'salespackage':
     case 'designpackages':
     case 'videoproduction':
     case 'codingpackage':
      this._AppComponent.displaydata(3);
      break;
     case 'contactus' :
      this._AppComponent.displaydata(4);
      break;
     default:
      this._AppComponent.displaydata(0);
      break;
    }
    // alert( location.href.substring(location.href.lastIndexOf('/') + 1));
  } 
  
}
