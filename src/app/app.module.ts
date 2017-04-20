import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { studentsComponent } from './app.studentsComponent';
import { profileComponent } from './app.profileComponent';
import { homeComponent } from './app.homeComponent';
import{errorComponent} from './app.errorComponent';
import { db } from './app.dbService';
import {profileGuard} from './app.profileGuard';

@NgModule({
  declarations: [
    AppComponent,
    studentsComponent,
    profileComponent,
    homeComponent,
    errorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'homepage', component: homeComponent },
      { path: 'students', component: studentsComponent },
      { path: 'profile/:id', component: profileComponent,canActivate:[profileGuard] },
      {path:'error',component:errorComponent},
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: '**', redirectTo: 'homepage', pathMatch: 'full' }
    ])
  ],
  providers: [db,profileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
