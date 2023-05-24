import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
