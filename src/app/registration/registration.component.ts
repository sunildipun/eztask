import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(
    private r: Router,
    // this.cities1 = []
  ) { }

  ngOnInit() {

  }


}
