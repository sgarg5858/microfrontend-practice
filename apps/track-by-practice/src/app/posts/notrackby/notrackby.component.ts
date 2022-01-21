import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Photo, PostsService } from '../../posts.service';

@Component({
  selector: 'microfrontends-demo-notrackby',
  templateUrl: './notrackby.component.html',
  styleUrls: ['./notrackby.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NotrackbyComponent implements OnInit,AfterViewInit,AfterContentInit,DoCheck {

  constructor(private postsService:PostsService,private cd:ChangeDetectorRef) { }
  photos:Photo[]=[];
  mySubscription= new Subscription();
  color:string="";
  ngOnInit(): void {

    this.mySubscription.add(
      this.postsService.getAllPhotos().subscribe((photos:Photo[])=>{
        this.photos=photos;
        this.cd.markForCheck();

        setTimeout(()=>{
          console.log("Timeout!")
        }),5000
      })
    )
  }
  refresh()
  {
    this.postsService.getAllPhotos().pipe().subscribe((photos:Photo[])=>{
      this.photos=[...photos];
      console.log("done");
      this.color="red";

    })
   
  }

  trackById(index:number,photo:Photo)
  {
    return photo.id
  }

  ngAfterContentInit(): void {
    console.log("Nested After COntent Init");
}
  ngAfterViewInit(): void {
    console.log("Netsed After View  Init");
  }

  ngDoCheck(): void {
    console.log("Nested Do check");
  }

}
