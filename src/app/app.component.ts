import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslateService]

})
export class AppComponent {
  title = 'proxywebsite';

  /**
   *
   */
  constructor() {
    // super();
    
  }

  
}


