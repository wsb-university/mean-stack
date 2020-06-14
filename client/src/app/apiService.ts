import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiStatusResponse } from './interfaces/ApiStatusResponse';
import { Post } from './post';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getStatus(): Promise<ApiStatusResponse> {
    return this.httpClient
      .get<ApiStatusResponse>(`${environment.apiUrl}/api/status`)
      .toPromise();
  }

  getPosts(): Promise<Array<Post>> {
    return this.httpClient
      .get<Array<Post>>(`${environment.apiUrl}/api/posts`)
      .toPromise();
  }

  getSinglePost(id: string): Promise<Post> {
    return this.httpClient
      .get<Post>(`${environment.apiUrl}/api/posts/${id}`)
      .toPromise();
  }

  createPost(doc: Post): Promise<Post> {
    return this.httpClient
      .post<Post>(`${environment.apiUrl}/api/posts`, doc)
      .toPromise();
  }
}
