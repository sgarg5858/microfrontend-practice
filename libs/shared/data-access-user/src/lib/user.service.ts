import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
    console.log("User Service")
  }

  
  private userDetails$ = new BehaviorSubject<User>({useremail:"",isLoggedIn:false});
  public userLoginDetails$=this.userDetails$.asObservable();

  loginUser(useremail:string,userpassword:string):Observable<string>{
    this.userDetails$.next({useremail,isLoggedIn:true});
    // const loginEvent= new CustomEvent('loginEvent',{detail:{useremail,isLoggedIn:true}});
    // window.dispatchEvent(loginEvent);
    return of(useremail).pipe(delay(100));
  }
  
  logout()
  {
    // this.userDetails$.next({useremail:"",isLoggedIn:false});
  }

}



export interface User{
  useremail:string;
  isLoggedIn:boolean;
}