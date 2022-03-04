import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./core/home/home.component";
import {GameComponent } from "./core/game/game.component";
import {EndComponent } from "./core/end/end.component";
import {RankingComponent } from "./core/ranking/ranking.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    EndComponent,
    RankingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
