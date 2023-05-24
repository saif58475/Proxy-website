import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../../app.component'
@Component({
  selector: 'app-sales-package',
  templateUrl: './sales-package.component.html',
  styleUrls: ['./sales-package.component.css']
})
export class SalesPackageComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}

