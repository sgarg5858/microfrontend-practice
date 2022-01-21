import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { UserService } from '@microfrontends-demo/shared/data-access-user';
import { HttpClientModule } from '@angular/common/http';
// import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        //Uncomment this one for static module federation
        // {
        //   path: 'login',
        //   loadChildren: () => import('login/Module').then((m) => m.LoginModule),
        // },
        {
          path: 'posts-and-users',
          loadChildren: () =>
            import('posts-and-users/Module').then((m) => m.PostsModule),
        },
        {
          path: 'login',
          loadChildren: () =>
            import('login-app/Module').then((m) => m.LoginModule),
        },
        // {
        //   path: 'track-by-practice',
        //   loadChildren: () =>
        //     import('track-by-practice/Module').then((m) => m.RemoteEntryModule),
        // },

        // {
        //   path:'login',
        //   loadChildren : () => loadRemoteModule({
        //     type:'module',
        //     remoteEntry:'http://localhost:4201/remoteEntry.js',
        //     // remoteName:'login',
        //     exposedModule:'./Module'
        //   }).then((m)=>m.LoginModule)
        // },
        // {
        //   path:'posts-and-users',
        //   loadChildren : () => loadRemoteModule({
        //     type:'module',
        //     remoteEntry:'http://localhost:4202/remoteEntry.js',
        //     // remoteName:'posts-and-users',
        //     exposedModule:'./Module'
        //   }).then((m)=>m.PostsModule)
        // }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
