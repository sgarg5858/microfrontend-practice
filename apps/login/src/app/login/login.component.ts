import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User, UserService} from '@microfrontends-demo/shared/data-access-user'
@Component({
  selector: 'microfrontends-demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  loginForm = new FormGroup({
    useremail: new FormControl('',[Validators.email,Validators.required]),
    userpassword: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  ngOnInit(): void {
    this.userService.userLoginDetails$.subscribe((user:User)=>{
      console.log(user);
    })
  }

  login()
  {
    const value = this.loginForm.value;
    console.log();
    this.userService.loginUser(value.useremail,value.userpassword).subscribe(email=>{
      console.log(email,"You are logged in now");
      // alert(`You are loggedin now,${email}`);
    })
  }
}
