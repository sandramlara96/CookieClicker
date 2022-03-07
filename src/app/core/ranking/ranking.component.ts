import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

interface Players {
  name: string,
  points: number
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  ranking: Players[];
  playerName: string;
  playerPoints: number;

  //Constructor
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.playerName = this.activeRoute.snapshot.paramMap.get("playerName");
    this.ranking = JSON.parse(localStorage.getItem("ranking"));
  }

  ngAfterViewInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload();
    } else {
      localStorage.removeItem('foo')
    }
  }
}
