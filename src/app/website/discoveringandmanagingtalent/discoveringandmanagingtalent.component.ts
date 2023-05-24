import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-discoveringandmanagingtalent',
  templateUrl: './discoveringandmanagingtalent.component.html',
  styleUrls: ['./discoveringandmanagingtalent.component.css']
})
export class DiscoveringandmanagingtalentComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
