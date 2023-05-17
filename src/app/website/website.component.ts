import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
    map:string = 'assets/images/mapKSA.png';  
  constructor() { }

  ngOnInit(): void {
    
  }    
    
SelectCountry(map:string){
  switch (map) {
    case "egy":
      this.map = 'assets/images/mapEGY.png'
      break;
    case "ksa":
      this.map = 'assets/images/mapKSA.png'
        break;
    case "uae":
      this.map = 'assets/images/mapUAE.png'
        break;
    default:
      this.map = 'assets/images/mapKSA.png'
  }
}

}
