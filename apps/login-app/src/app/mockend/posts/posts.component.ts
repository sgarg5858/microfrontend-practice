import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  @Input() posts:any[]|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
