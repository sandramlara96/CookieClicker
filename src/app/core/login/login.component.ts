import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    //Form
   formNewUser: FormGroup = this.formBuilder.group(
    {
      nameNewUser: ["", [Validators.required]]
    },{}
  );;

 
    //Constructor
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,  
  ){}



  ngOnInit() {

  }

  async startPlay(playerName?: string) {

    this.router.navigate(["/", "play"]);
  }
 
}
