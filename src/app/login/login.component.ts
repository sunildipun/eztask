import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = 'https://lh3.googleusercontent.com/4X34n3Es5UP28VEMw-qRUgNvyh8rzgUHGWEcHBnLRm-bqVbpupcqh7X0WhnMpo7FyWoiKg=s85';
  myform: FormGroup;

  constructor(
    private socialAuthService: AuthService,
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

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        // Now sign-in with userData
      }
    );
  }

  loginUser(e) {
    console.log('Login CLicked');
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    if (username === 'admin' && password === 'admin') {
      this.r.navigate(['/dashboard']);
    }


  }

  goRegistration() {
    console.log('Registration Clicked');
    this.r.navigate(['/registration']);
  }

}
