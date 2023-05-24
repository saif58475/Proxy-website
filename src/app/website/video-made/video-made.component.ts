import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component'
@Component({
  selector: 'app-video-made',
  templateUrl: './video-made.component.html',
  styleUrls: ['./video-made.component.css']
})
export class VideoMadeComponent implements OnInit {

  constructor(private _AppComponent:AppComponent) { }

  ngOnInit(): void {
    this._AppComponent.style();
  }

}
