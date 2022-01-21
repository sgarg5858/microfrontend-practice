/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { RemoteEntryModule } from './remote-entry/entry.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import {MockendModule} from './mockend/mockend.module'
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, CardComponent],
  imports: [
    BrowserModule,
    MockendModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
      }
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
