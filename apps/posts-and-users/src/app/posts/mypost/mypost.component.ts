import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../posts.service';

@Component({
  selector: 'microfrontends-demo-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss']
})
export class MypostComponent implements OnInit {

  constructor() { }

  @Input() post:Post|undefined;
  @Output() postClick = new EventEmitter<Post>();

  ngOnInit(): void {
  }
  postClicked()
  {
    this.postClick.emit(this.post);
  }

}
