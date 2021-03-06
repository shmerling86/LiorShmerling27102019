import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('selected', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1200)
      ])
    ])
    
  ]

})
export class AppComponent {

  title = 'LiorShmerling27102019';

  constructor(public mainService: MainService) { }

}
