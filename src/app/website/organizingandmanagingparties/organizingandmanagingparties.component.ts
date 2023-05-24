import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component'
@Component({
  selector: 'app-organizingandmanagingparties',
  templateUrl: './organizingandmanagingparties.component.html',
  styleUrls: ['./organizingandmanagingparties.component.css']
})
export class OrganizingandmanagingpartiesComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
