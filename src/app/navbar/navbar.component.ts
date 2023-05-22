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
   this.selectpage('one');
  }

  changeLanguage() {
    this.lang = !this.lang;
    switch(this.lang) {
      case true:
      localStorage.setItem('language', 'en');
      alert(      localStorage.getItem('language')      )
      break;
      case false:
       localStorage.setItem('language', 'ar');
       alert(      localStorage.getItem('language')      )
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
  
  selectpage(page:string){
    switch (page) {
      case 'one':
        document.getElementById("main")!.style.color = 'yellow';
        break;
      case 'orange':
        console.log('This is an orange.');
        break;
      case 'apple':
        console.log('This is an apple.');
        break;
      default:
        console.log('This is not a recognized fruit.');
    }
  }
}
