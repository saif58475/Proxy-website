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
  language:any;
constructor(private elRef: ElementRef, private renderer: Renderer2, private translate:TranslateService,private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
    let i = 0 ;
    interval(4000).subscribe(() => {
        this.SelectCountry(this.countries[i]);
        this.changecolor(this.countries[i]);
        if( i == 2){
          i = 0; 
       }else {
        i++;
       }
    });
  }

  
SelectCountry(map:string){
  switch (map) {
    case "egy":
      document.getElementById('uae')!.classList.remove('textofmap');
      this.map = 'assets/images/mapEGY.png';
      break;
    case "ksa":
      document.getElementById('egy')!.classList.remove('textofmap');
      this.map = 'assets/images/mapKSA.png';
        break;
    case "uae":
      document.getElementById('ksa')!.classList.remove('textofmap');
      this.map = 'assets/images/mapUAE.png';
      
        break;
    default:
      this.map = 'assets/images/mapKSA.png'
  }
}

changecolor(id:string){
  document.getElementById(`${id}`)!.classList.add('textofmap');

  }

}
