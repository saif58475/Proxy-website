import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-campaignmanagment',
  templateUrl: './campaignmanagment.component.html',
  styleUrls: ['./campaignmanagment.component.css']
})
export class CampaignmanagmentComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
