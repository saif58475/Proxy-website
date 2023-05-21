import { Component, OnInit, ElementRef, Renderer2  } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
    map:string = 'assets/images/mapKSA.png'; 
    countries:string [] = ['ksa','uae','egy']; 
    element:any;
    intervalId: any;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    let i = 0 ;
    interval(2000).subscribe(() => {
        this.SelectCountry(this.countries[i]);
        // this.changecolor(`#${this.countries[i]}`);
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
      this.map = 'assets/images/mapEGY.png';
       
      break;
    case "ksa":
      this.map = 'assets/images/mapKSA.png';
            
        break;
    case "uae":
      this.map = 'assets/images/mapUAE.png';
      
        break;
    default:
      this.map = 'assets/images/mapKSA.png'
  }
}

changecolor(id:string){
  this.element = [];
  this.element = this.elRef.nativeElement.querySelector(`#${id}`);
  }
}
