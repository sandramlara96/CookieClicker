import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import playersData from '../../../assets/ranking.json';  

interface Players{
id:Number,
name:String,
points:Number
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit{


  players:Players[]=playersData;
  playerName: string; 
  playerPoints: number; 
 //Constructor
 constructor(
  private router: Router,
  private activeRoute: ActivatedRoute,  
){}

ngOnInit():void{
  this.playerName = this.activeRoute.snapshot.paramMap.get("playerName");
  this.playerPoints = Number(this.activeRoute.snapshot.paramMap.get("playerPoints"));
}
 
}
