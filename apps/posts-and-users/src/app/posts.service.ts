import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, of } from 'rxjs';

export interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;
}


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }

  getPosts(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe( delay(500), catchError(()=>of([])));
  }

  getPostById(id:string)
  {
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .pipe( delay(500));
  }

}
