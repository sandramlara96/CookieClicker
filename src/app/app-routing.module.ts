import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { GameComponent } from "./core/game/game.component";
import { EndComponent } from "./core/end/end.component";

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch :"full"},
  {path: 'game/:playerName/points/:playerPoints', component: GameComponent},
  {path: 'home', component: HomeComponent},
  {path: 'end/:playerName/points/:playerPoints',  children:[
    {path: '', component: EndComponent},
    {path: 'home', component: HomeComponent},
    {path: 'game/:playerName/points/:playerPoints', component: GameComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
