import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;

  constructor(
    // private route: ActivatedRoute,
    private r: Router,
  ) { }

  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
    ]),
    });
  }

  goRegistration() {
    console.log('Registration Clicked');
    this.r.navigate(['/registration']);
  }

}
