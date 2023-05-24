import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-managecommunicationaccount',
  templateUrl: './managecommunicationaccount.component.html',
  styleUrls: ['./managecommunicationaccount.component.css']
})
export class ManagecommunicationaccountComponent implements OnInit {

  constructor(private _AppComponent:AppComponent ) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
