import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private _AppComponent:AppComponent ) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
