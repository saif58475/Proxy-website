import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component'
@Component({
  selector: 'app-professionallaunchpackages',
  templateUrl: './professionallaunchpackages.component.html',
  styleUrls: ['./professionallaunchpackages.component.css']
})
export class ProfessionallaunchpackagesComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
