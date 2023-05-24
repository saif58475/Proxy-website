import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _AppComponent:AppComponent ) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
