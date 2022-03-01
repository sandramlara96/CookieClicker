import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    //Form
    formNewUser: FormGroup;

 
    //Constructor
  constructor(fb: FormBuilder  
  ){this.formNewUser = fb.group(
    {
     ["nameNewUser"]: ["", [Validators.required]]
    },{}
  );}



  ngOnInit() {

  }

 
}
