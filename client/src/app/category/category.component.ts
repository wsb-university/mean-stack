import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  posts = [];

  constructor(apiService: ApiService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      apiService
        .getSingleCategory(params.id)
        .then((posts) => (this.posts = posts));
    });
  }

  ngOnInit(): void {}
}
