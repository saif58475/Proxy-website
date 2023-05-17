import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
   this.selectpage('one');
  }

  selectpage(page:string){
    switch (page) {
      case 'one':
        document.getElementById("main")!.style.color = 'yellow';
        break;
      case 'orange':
        console.log('This is an orange.');
        break;
      case 'apple':
        console.log('This is an apple.');
        break;
      default:
        console.log('This is not a recognized fruit.');
    }
  }
}
