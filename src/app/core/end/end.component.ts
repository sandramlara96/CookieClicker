import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent {
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
