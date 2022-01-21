import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit,AfterViewInit {

  constructor() { }

  @Input() title:string="";
  @Input() subtitle:string="";
  @Input() content:string="";
  @Output() cardClicked= new EventEmitter<boolean>();

  clickCard()
  {
    this.cardClicked.emit(true);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

}
