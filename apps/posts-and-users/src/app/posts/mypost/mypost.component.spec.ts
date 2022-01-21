import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from '../../posts.service';

import { MypostComponent } from './mypost.component';

//StandAlone test suite
describe('MypostComponent in a stand alone', () => {
  let component: MypostComponent;
  let fixture: ComponentFixture<MypostComponent>;
  let compiledElement:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypostComponent);
    component = fixture.componentInstance;
    compiledElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Standalone testing for child component
  it('should show the post and on click should send',async()=>{
    
    const expectedPost:Post={id:1,userId:1,body:"body",title:"title"};
    component.post= {...expectedPost};
    fixture.detectChanges();
    const postElement = compiledElement.querySelector('.mypost');
    // console.log(postElement.textContent);
    expect(postElement.textContent).toContain(expectedPost.title);

    let selectedPost:Post|undefined;
    component.postClick.subscribe((post:Post)=>{
      // console.log(post);
      selectedPost=post;
    })

    await postElement.click();
    // console.log(selectedHero?.title,"After clicked");
    expect(selectedPost?.title).toBe(expectedPost.title);

  })
});


@Component({
  template:`
  <microfrontends-demo-mypost [post]="post" (postClick)="logIt($event)"> </microfrontends-demo-mypost>
  `
})
export class TestMyPostsComponent{
  post:Post={
    id:1,userId:1,title:'title',body:'body'
  };
  selectedPost:Post|undefined;
  logIt(event:Post)
  {
    this.selectedPost=event;
  }
}

describe('MypostComponent in a host', () => {
  let component: TestMyPostsComponent;
  let fixture: ComponentFixture<TestMyPostsComponent>;
  let compiledElement:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypostComponent,TestMyPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMyPostsComponent);
    component = fixture.componentInstance;
    compiledElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //child  compoennt in a host test testing for child component
  it('should show the post and on click should send',async()=>{
    
    const expectedPost:Post={id:1,userId:1,body:"body",title:"title"}
    component.post= {...expectedPost};
    fixture.detectChanges();
    const postElement = compiledElement.querySelector('.mypost');
    // console.log(postElement.textContent);
    expect(postElement.textContent).toContain(expectedPost.title);

    await postElement.click();

    expect(component.selectedPost).toEqual(expectedPost);

    

  })
});