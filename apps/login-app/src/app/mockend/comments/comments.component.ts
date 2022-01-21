import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @Input() comments:any[]|undefined;

  ngOnInit(): void {
  }

}
