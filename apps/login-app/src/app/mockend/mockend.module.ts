import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    PostsComponent,
    CommentsComponent,
    TodosComponent,
    UsersComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ContainerComponent]
})
export class MockendModule { }
