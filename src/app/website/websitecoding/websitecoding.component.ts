import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component'
@Component({
  selector: 'app-websitecoding',
  templateUrl: './websitecoding.component.html',
  styleUrls: ['./websitecoding.component.css']
})
export class WebsitecodingComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
