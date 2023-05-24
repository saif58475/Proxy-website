import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../../app.component'
@Component({
  selector: 'app-viideo-production-package',
  templateUrl: './viideo-production-package.component.html',
  styleUrls: ['./viideo-production-package.component.css']
})
export class ViideoProductionPackageComponent implements OnInit {

  constructor(private _AppComponent:AppComponent ) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
