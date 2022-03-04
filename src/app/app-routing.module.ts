import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { GameComponent } from "./core/game/game.component";
import { EndComponent } from "./core/end/end.component";
import { RankingComponent } from "./core/ranking/ranking.component";

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch :"full"},
  {path: 'game/:playerName/points/:playerPoints', component: GameComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ranking/:playerName/points/:playerPoints',  children:[
    {path: '', component: RankingComponent},
    {path: 'game/:playerName/points/:playerPoints', component: GameComponent},
  ]},
  {path: 'end/:playerName/points/:playerPoints',  children:[
    {path: '', component: EndComponent},
    {path: 'home', component: HomeComponent},
    {path: 'game/:playerName/points/:playerPoints', component: GameComponent},
    {path: 'ranking/:playerName/points/:playerPoints', component: RankingComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
