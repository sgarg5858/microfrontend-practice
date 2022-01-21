import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User, UserService} from '@microfrontends-demo/shared/data-access-user'
import { Subscription } from 'rxjs';
@Component({
  selector: 'microfrontends-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'shell';
  private userSubScription:Subscription= new Subscription();

  constructor(private userService:UserService,private router:Router){}

  ngOnInit()
  {
    window.addEventListener('loginEvent',(event)=>{
      console.log(event);
    })

    this.userService.userLoginDetails$.subscribe(async(user:User)=>{

      console.log(user);
      if(!user.isLoggedIn)
      {
        this.router.navigate(['login']);
      }
      else
      { 
        this.router.navigate(['posts-and-users']);
      }
    })

      
  }

  ngOnDestroy()
  {
    console.log("Destroying App Component of Shell")
    }
}
