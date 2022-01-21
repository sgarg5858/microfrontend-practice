import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit,AfterContentInit,AfterViewInit,DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
      console.log("Container After COntent Init");
  }
  ngAfterViewInit(): void {
    console.log("Container After View  Init");
  }
  ngDoCheck(): void {
    console.log("Container Do check");
  }
}
