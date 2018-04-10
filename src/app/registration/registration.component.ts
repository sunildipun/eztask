import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
    // cities1 =
    // [
    //   {label: 'Select City', value: null},
    //   {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
    //   {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
    //   {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
    //   {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
    //   {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
    // ],
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
