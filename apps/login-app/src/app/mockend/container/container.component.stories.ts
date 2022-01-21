import { Meta,Story,moduleMetadata } from "@storybook/angular";
import { CommentsComponent } from "../comments/comments.component";
import { PostsComponent } from "../posts/posts.component";
import { TodosComponent } from "../todos/todos.component";
import { UsersComponent } from "../users/users.component";
import { ContainerComponent } from "./container.component";
// import * as UserStories from '../users/users.component.stories';
// import * as PostStories from '../posts/posts.component.stories';
// import * as CommentStories from '../comments/comment.component.stories';
// import * as TodoStories from '../todos/todos.component.stories';
import { DataService } from "../../data.service";
import { HttpClientModule} from "@angular/common/http";
import { CommonModule } from "@angular/common";
import {rest} from 'msw';
import { mockPosts } from "../posts/mockPosts";
import { mockTodos } from "../todos/mockTodos";
import { comments } from "../comments/mockComments";
import { mockUsers } from "../users/mockUsers";
export default{
    title:'Container Component',
    component:ContainerComponent,
    decorators:[
        moduleMetadata({
            imports:[CommonModule,HttpClientModule],
            declarations:[PostsComponent,CommentsComponent,UsersComponent,TodosComponent],
            providers:[DataService,]
        })
    ]
} as Meta<ContainerComponent>;

const Template:Story<ContainerComponent> = (args:ContainerComponent) => ({
    component:ContainerComponent,
    props:args
})

export const showAllLoading=Template.bind({});

export const showAll= Template.bind({});
showAll.parameters={
    //Service worker not working as of now
    msw:[
        rest.get('https://jsonplaceholder.typicode.com/posts',(req,res,ctx)=>{
            return res(ctx.json(mockPosts))
        }),
        rest.get('https://jsonplaceholder.typicode.com/users',(req,res,ctx)=>{
            return res(ctx.json(mockUsers))
        }),
        rest.get('https://jsonplaceholder.typicode.com/comments',(req,res,ctx)=>{
            return res(ctx.json(comments))
        }),
        rest.get('https://jsonplaceholder.typicode.com/todos',(req,res,ctx)=>{
            return res(ctx.json(mockTodos))
        })
    ]
}

export const showAllError = Template.bind({});
showAllError.parameters={
    msw:[
        rest.get('https://jsonplaceholder.typicode.com/posts',(req,res,ctx)=>{
            return res(ctx.json([]))
        }),
        rest.get('https://jsonplaceholder.typicode.com/users',(req,res,ctx)=>{
            return res(ctx.json([]))
        }),
        rest.get('https://jsonplaceholder.typicode.com/comments',(req,res,ctx)=>{
            return res(ctx.json([]))
        }),
        rest.get('https://jsonplaceholder.typicode.com/todos',(req,res,ctx)=>{
            return res(ctx.json([]))
        })
    ]
}