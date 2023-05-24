import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../../app.component'
@Component({
  selector: 'app-coding-package',
  templateUrl: './coding-package.component.html',
  styleUrls: ['./coding-package.component.css']
})
export class CodingPackageComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
