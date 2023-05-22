import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {

  }

  changeLanguage() {
    this.lang = !this.lang;
    switch(this.lang) {
      case true:
      localStorage.setItem('language', 'en');
      document.body.dir = 'rtl';
      break;
      case false:
       localStorage.setItem('language', 'ar');
       document.body.dir = 'ltr';
             break;
      default:
        alert('nothing');
    }

    // if( localStorage.getItem('language') == 'en'){
    //  alert('this is english');
    // }else{
    //   alert('this is arabic')
    // }
    
  }
  
 
}
