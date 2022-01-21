import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { PostsComponent } from './posts.component';
import { MypostsComponent } from './myposts/myposts.component';
import { MypostComponent } from './mypost/mypost.component';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [
    ContainerComponent,
    PostsComponent,
    MypostsComponent,
    MypostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:ContainerComponent},
      {path:'post/:id',component:PostDetailComponent}
    ])
  ]
})
export class PostsModule { }
