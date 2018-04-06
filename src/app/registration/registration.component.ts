import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name: string;
  email: string;
  code: string;
  number: number;
  password: string;
  cpwd: string;
  logo = 'https://lh3.googleusercontent.com/4X34n3Es5UP28VEMw-qRUgNvyh8rzgUHGWEcHBnLRm-bqVbpupcqh7X0WhnMpo7FyWoiKg=s85';
  constructor(
    private r: Router,
    //  this.cities1 = []
  ) { }


  ngOnInit() {

  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log('Form has been submitted');
    let name = e.target.elements[0].value;
    let email = e.target.elements[1].value;
    let code = e.target.elements[2].value;
    let mobile = e.target.elements[3].value;
    let pwd = e.target.elements[4].value;
    let cpwd = e.target.elements[4].value;
    if (pwd === 'admin' && cpwd === 'admin') {
      this.r.navigate(['/dashboard']);
    } else {
      alert('Cant Login');
    }
  }


}
