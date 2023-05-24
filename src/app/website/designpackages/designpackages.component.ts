import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-designpackages',
  templateUrl: './designpackages.component.html',
  styleUrls: ['./designpackages.component.css']
})
export class DesignpackagesComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
