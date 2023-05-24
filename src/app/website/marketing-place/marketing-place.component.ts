import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component'
@Component({
  selector: 'app-marketing-place',
  templateUrl: './marketing-place.component.html',
  styleUrls: ['./marketing-place.component.css']
})
export class MarketingPlaceComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
