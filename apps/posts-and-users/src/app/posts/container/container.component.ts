import { Component, OnDestroy, OnInit } from '@angular/core';
import {User, UserService} from '@microfrontends-demo/shared/data-access-user'
import { Observable, Subscriber, Subscription } from 'rxjs';
@Component({
  selector: 'microfrontends-demo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit,OnDestroy{
  // private subscription= new Subscription();
  constructor(private userService:UserService) { }
  user$:Observable<User>=this.userService.userLoginDetails$;
  condition:boolean=false;

  getButtonName()
  {
    console.log("getButtonName");
    return "hey";
  }

  ngOnInit(): void {

    // this.subscription.add(
    //   this.userService.userLoginDetails$.subscribe((user:User)=>{
    //     this.user=user;
    //   })
    // )

  }
  ngOnDestroy()
  {
    // this.subscription.unsubscribe();
  }

}
