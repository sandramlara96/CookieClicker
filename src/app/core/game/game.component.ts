import { Component, ViewChild,ElementRef, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit, OnDestroy {
  playerName: string; 
  playerPoints: number=0;


  constructor(
    private activeRoute: ActivatedRoute){}


  click(){
    this.playerPoints =this.playerPoints +1;
  }

 ngOnInit():void{
  this.playerName = this.activeRoute.snapshot.paramMap.get("playerName");
  this.playerPoints = Number(this.activeRoute.snapshot.paramMap.get("playerPoints"));
}

ngOnDestroy():void{
 
}
}
