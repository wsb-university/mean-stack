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
    const doc = {
      title: this.title,
      shortContent: this.shortContent,
      longContent: this.longContent,
    };

    this.apiService.createPost(doc).then(console.warn);
  }
}
