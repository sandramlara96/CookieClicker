import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./core/login/login.component";
import { PlayComponent } from "./core/play/play.component";

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch :"full"},
  {path: 'play', component: PlayComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
