import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { GameComponent } from "./core/game/game.component";
import { EndComponent } from "./core/end/end.component";
import { RankingComponent } from "./core/ranking/ranking.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'game/:playerName', component: GameComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'ranking/:playerName', children: [
      { path: '', component: RankingComponent },
      { path: 'game/:playerName', component: GameComponent },
    ]
  },
  {
    path: 'end/:playerName', children: [
      { path: '', component: EndComponent },
      { path: 'home', component: HomeComponent },
      { path: 'game/:playerName', component: GameComponent },
      { path: 'ranking/:playerName', component: RankingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
