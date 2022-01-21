import { Component, OnInit } from '@angular/core';
import {Post, PostsService} from '../../posts.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'microfrontends-demo-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.scss']
})
export class MypostsComponent implements OnInit {

  constructor(private postsService:PostsService) { }

  posts$:Observable<Post[]>=this.postsService.getPosts()
  selectedPost:Post|undefined;
  ngOnInit(): void {
  }

  logIt(event:Post)
  {
    this.selectedPost=event;
  }

}
