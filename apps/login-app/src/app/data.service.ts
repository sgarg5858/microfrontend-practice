import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getPosts()
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(catchError(()=>of([]))).toPromise();
  }

  getComments()
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments').pipe(catchError(()=>of([]))).toPromise();
  }
  getTodos()
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(catchError(()=>of([]))).toPromise();
  }
  getUsers()
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(catchError(()=>of([]))).toPromise();
  }


}
