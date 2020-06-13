import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postId = null;

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      this.postId = params.id;
    });
  }

  ngOnInit(): void {}
}
