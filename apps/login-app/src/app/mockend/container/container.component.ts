import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: 'microfrontends-demo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private dataService:DataService) { }

  posts:any[]|undefined;
  comments:any[]|undefined;
  todos:any[]|undefined;
  users:any[]|undefined;

  ngOnInit(): void {
    // this.getAllData();

    forkJoin([this.dataService.getPosts(),
      this.dataService.getComments(),
      this.dataService.getTodos(),
      this.dataService.getUsers()]).subscribe(([posts,comments,todos,users])=>{
        this.posts=posts;
        this.comments=comments;
        this.todos=todos ;
        this.users=users; 
      })

  }

  async getAllData()
  {
    try {
      const [posts,comments,todos,users]= await Promise.all([
        this.dataService.getPosts(),
        this.dataService.getComments(),
        this.dataService.getTodos(),
        this.dataService.getUsers()
      ]);
      this.posts=posts as any[];
      this.comments=comments as any[];
      this.todos=todos as any[];
      this.users=users as any[];   
    } catch (error) {
      
    }   
  }

}
