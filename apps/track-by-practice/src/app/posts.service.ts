import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Photo{
  albumId:number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }
  private photos:Photo[]=[];
  private photos$= new Subject<Photo[]>();
  getAllPhotos()
  {
    return this.httpClient.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }

  addPhoto()
  {
    let photo:Photo={
      albumId:101,
      id:5001,
      title:'title',
      url:'https://via.placeholder.com/600/6dd9cb',
      thumbnailUrl:'https://via.placeholder.com/600/6dd9cb'
    };
    this.photos.push()
  }

  loadUpdatedPhotos()
  {
    return this.photos$.asObservable();
  }

}
