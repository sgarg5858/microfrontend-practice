import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos:any[]| undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
