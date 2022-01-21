import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post, PostsService } from '../../posts.service';

@Component({
  selector: 'microfrontends-demo-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private postsService:PostsService) { }

  post:Post|undefined;
  error:boolean=false;
  loading:boolean=true;
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params:Params)=>{
      console.log(params,params?.['params']['id']);
      const id=params?.['params']['id'];
      if(id)
      {
        this.postsService.getPostById(id).subscribe((post:Post)=>{
          this.loading=false;
          this.error=false;
          this.post=post;
        },(error)=>{
          this.error=true;
          this.loading=false;
        })
      }

    })

  }

}
