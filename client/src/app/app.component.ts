import { Component } from '@angular/core';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };
}
