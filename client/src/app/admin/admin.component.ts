import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  title = '';
  shortContent = '';
  longContent = '';
  accessToken = null;

  constructor(private apiService: ApiService) {
    this.accessToken = localStorage.getItem('accessToken');
  }

  ngOnInit(): void {}

  handleSave() {
    const doc: any = {
      title: this.title,
      shortContent: this.shortContent,
      longContent: this.longContent,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Basic ${this.accessToken}`,
      }),
    };

    this.apiService.createPost(doc, httpOptions).then(console.warn);

    // post update mock
    // doc._id = 'BlQdN8r9QezqhPl2';
    // this.apiService.updatePost(doc).then(console.warn);

    // post delete mock
    // this.apiService.deletePost('kGW2bVZALfOLqBr6').then(console.warn);
  }
}
