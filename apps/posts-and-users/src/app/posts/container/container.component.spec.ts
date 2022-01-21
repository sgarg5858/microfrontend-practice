import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService,User } from '@microfrontends-demo/shared/data-access-user';
import { of } from 'rxjs';

import { ContainerComponent } from './container.component';

//APPROACH-1
//This approach uses stubs of nested compoents in Container Component
describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let compiledNativeElement:any;
  let userMock:User={
    useremail:'sgarg5858@gmail.com',
    isLoggedIn:true
  }
  
  let userServiceMock = {
    userLoginDetails$:of(userMock)
  }

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent ,MyPostsStubComponent],
      providers:[
        {provide:UserService,useValue:userServiceMock}
      ]
    })
    .compileComponents();

    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    compiledNativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show user loggedin heading when user loggedin',()=>{

    let userLoggedInHeading = compiledNativeElement.querySelector('.userLoggedinHeading');
    expect(userLoggedInHeading.textContent).toContain(userMock.useremail);
    // console.log(userLoggedInHeading.textContent);

  })

  it('should show user loggedin heading when user loggedin',()=>{

     component.user$ = of({useremail:'',isLoggedIn:false});
     //In Testing environment change detection doesn't run automatically 
     //tester/devs need to trigger it manually as it gives more control to dev/tester
     fixture.detectChanges();
    let userLoggedInHeading = compiledNativeElement.querySelector('.userLoggedinHeading');
    expect(userLoggedInHeading).toBeNull();

  })

});

@Component({
  selector:'microfrontends-demo-myposts'
})
class MyPostsStubComponent{}


//APPROACH-2
// this uses CUSTOM_ELEMENTS_SCHEMA which tells Angular Compiler to 
// ignore unrecognized components/selectors in template 
// angular will render them as  empty tags
describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let compiledNativeElement:any;
  let userMock:User={
    useremail:'sgarg5858@gmail.com',
    isLoggedIn:true
  }
  let userServiceMock = {
    userLoginDetails$:of(userMock)
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        {provide:UserService,useValue:userServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    compiledNativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show user loggedin heading when user loggedin',()=>{

    let userLoggedInHeading = compiledNativeElement.querySelector('.userLoggedinHeading');
    expect(userLoggedInHeading.textContent).toContain(userMock.useremail);
    // console.log(userLoggedInHeading.textContent);

  })

  it('should show user loggedin heading when user loggedin',()=>{

     component.user$ = of({useremail:'',isLoggedIn:false});
     //In Testing environment change detection doesn't run automatically 
     //tester/devs need to trigger it manually as it gives more control to dev/tester
     fixture.detectChanges();
    let userLoggedInHeading = compiledNativeElement.querySelector('.userLoggedinHeading');
    expect(userLoggedInHeading).toBeNull();

  })

});