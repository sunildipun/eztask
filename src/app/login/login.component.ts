import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    // private route: ActivatedRoute,
    private r: Router,
  ) { }

  ngOnInit() {
  }

  goRegistration() {
    console.log('Registration Clicked');
    this.r.navigate(['/registration']);
  }

}
