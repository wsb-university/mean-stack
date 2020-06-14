import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    localStorage.setItem('accessToken', btoa(`${this.email}:${this.password}`));
  }
}
