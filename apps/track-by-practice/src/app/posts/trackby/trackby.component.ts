import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.scss']
})
export class TrackbyComponent implements OnInit,DoCheck {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    console.log("Child Do check");
  }

}
