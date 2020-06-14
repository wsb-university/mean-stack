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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  handleSave() {
    const doc: any = {
      title: this.title,
      shortContent: this.shortContent,
      longContent: this.longContent,
    };

    this.apiService.createPost(doc).then(console.warn);

    // post update mock
    // doc._id = 'BlQdN8r9QezqhPl2';
    // this.apiService.updatePost(doc).then(console.warn);

    // post delete mock
    // this.apiService.deletePost('kGW2bVZALfOLqBr6').then(console.warn);
  }
}
