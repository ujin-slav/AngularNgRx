import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';

import { StoreModule } from "@ngrx/store";
import { AboutComponent } from './about/about.component';
import { counterReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/effects';

const appRoutes: Routes =[
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([Effects]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
