import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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

 
 
}
