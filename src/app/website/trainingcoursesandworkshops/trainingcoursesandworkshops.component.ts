import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component'
@Component({
  selector: 'app-trainingcoursesandworkshops',
  templateUrl: './trainingcoursesandworkshops.component.html',
  styleUrls: ['./trainingcoursesandworkshops.component.css']
})
export class TrainingcoursesandworkshopsComponent implements OnInit {

  constructor(private _AppComponent:AppComponent ) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
