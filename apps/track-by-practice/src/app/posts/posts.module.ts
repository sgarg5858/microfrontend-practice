import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../container/container.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { TrackbywithasyncComponent } from './trackbywithasync/trackbywithasync.component';
import { NotrackbyComponent } from './notrackby/notrackby.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContainerComponent,
    TrackbyComponent,
    TrackbywithasyncComponent,
    NotrackbyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:ContainerComponent}
    ])
  ]
})
export class PostsModule { }
