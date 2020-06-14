import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { flipInX } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';
import { environment } from './../environments/environment';
import { ApiStatusResponse } from './interfaces/ApiStatusResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  status = null;

  constructor(httpClient: HttpClient) {
    httpClient
      .get(`${environment.apiUrl}/api/status`)
      .toPromise()
      .then((data: ApiStatusResponse) => (this.status = data.status));
  }

  enterAnimation: TextAnimation = {
    animation: flipInX,
    delay: 50,
    type: 'letter',
  };
}
