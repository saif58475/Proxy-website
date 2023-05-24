import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../../app.component'
@Component({
  selector: 'app-design-package',
  templateUrl: './design-package.component.html',
  styleUrls: ['./design-package.component.css']
})
export class DesignPackageComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
