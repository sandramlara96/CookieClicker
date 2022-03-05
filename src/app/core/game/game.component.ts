import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

interface Players {
  name: string,
  points: number
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit, OnDestroy {

  playerName: string;
  playerPoints: number = 0;
  newPlayer: Players = { name: "", points: 0 };

  ranking: Players[] = [];


  constructor(
    private activeRoute: ActivatedRoute) { }


  click() {
    this.playerPoints = this.playerPoints + 1;
  }

  savePoints() {

    for (var i = 0; i < this.ranking.length; i++) {
      if (this.ranking[i].name.toLowerCase() == this.playerName.toLowerCase()) {
        this.ranking[i].points = this.playerPoints;
        break;
      }
    }
    localStorage.setItem("ranking", JSON.stringify(this.ranking));

  }

  ngOnInit(): void {
    this.loadRanking();
  }

  loadRanking() {
    var newPlayerAdded = true;
    this.playerName = this.activeRoute.snapshot.paramMap.get("playerName");
    this.ranking = JSON.parse(localStorage.getItem("ranking"));
    if (this.ranking != null) {
      for (var i = 0; i < this.ranking.length; i++) {
        if (this.ranking[i].name.toLowerCase() == this.playerName.toLowerCase()) {
          this.playerPoints = this.ranking[i].points;
          newPlayerAdded = false;
          break;
        }
      }

      if (newPlayerAdded) {
        this.newPlayer.name = this.playerName;
        this.newPlayer.points = 0;
        this.ranking.push(this.newPlayer);
        localStorage.setItem("ranking", JSON.stringify(this.ranking));

      }
    } else {
      this.newPlayer.name = this.playerName;
      this.ranking = [];
      this.ranking.push(this.newPlayer);
      localStorage.setItem("ranking", JSON.stringify(this.ranking));
    }
  }

  ngOnDestroy(): void {

  }
}
