import { Component, OnInit, ElementRef, Renderer2, Input  } from '@angular/core';
import { interval } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from './../../app.component'; 
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  map:string = 'assets/images/mapKSA.png'; 
  countries:string [] = ['ksa','uae','egy']; 
  element:any;
  intervalId: any;
  language!:string | null;
  Country?:string;
constructor(private elRef: ElementRef, private renderer: Renderer2, private translate:TranslateService,private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    localStorage.setItem('language', 'ar');
    this._AppComponent.style();
    let i = 0 ;
    interval(4000).subscribe(() => {
      this.language = localStorage.getItem('language');
        this.SelectCountry(this.countries[i] , this.language!);
        this.changecolor(this.countries[i]);
        if( i == 2){
          switch (localStorage.getItem('language')) {
            case 'en':
              document.getElementById('map')?.classList.add("flip-image");
              document.getElementById('mapword')?.classList.remove("word_of_imagecountryar");
              document.getElementById('mapword')?.classList.add("word_of_imagecountryen");
            break;
            case 'ar':
              document.getElementById('map')?.classList.remove("flip-image");
              document.getElementById('mapword')?.classList.remove("word_of_imagecountryen");
              document.getElementById('mapword')?.classList.add("word_of_imagecountryar");           
            break;
            default:
              document.getElementById('map')?.classList.remove("flip-image");
            break;
          }
          i = 0; 
       }else {
        i++;
       }
    });
  }

  
SelectCountry(map:string , lang:string){
  switch (map + lang) {
    case "egyar":
      document.getElementById('uae')!.classList.remove('textofmap');
      this.map = 'assets/images/mapEGY.png';
      this.Country = 'القاهره'
      break;
    case "egyen":
      document.getElementById('uae')!.classList.remove('textofmap');
      this.map = 'assets/images/mapEGY.png';
      this.Country = 'Cairo'
      break;
   
    case "ksaar":
      document.getElementById('egy')!.classList.remove('textofmap');
      this.map = 'assets/images/mapKSA.png';
      this.Country = 'جدة';
        break;
    case "ksaen":
      document.getElementById('egy')!.classList.remove('textofmap');
      this.map = 'assets/images/mapKSA.png';
      this.Country = 'Jeddah';
        break;
   
    case "uaear":
      document.getElementById('ksa')!.classList.remove('textofmap');
      this.map = 'assets/images/mapUAE.png';
      this.Country = 'دبي';
        break;
    case "uaeen":
      document.getElementById('ksa')!.classList.remove('textofmap');
      this.map = 'assets/images/mapUAE.png';
      this.Country = 'Dubai';
        break;
  
    default:
      this.map = 'assets/images/mapKSA.png';
      this.Country = 'جدة'
  }
}

changecolor(id:string){
  document.getElementById(`${id}`)!.classList.add('textofmap');
  }

}
