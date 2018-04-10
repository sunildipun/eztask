import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { UserService } from '../user.service';

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
    private user: UserService,
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
        this.r.navigate(['/dashboard']);
      }
    );
  }

  loginUser(e) {
    console.log('Login CLicked');
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    // const username = this.model.username;
    // const password = this.model.password;
    if (username === 'admin' && password === 'admin') {
      this.user.setUserLoggedIn();
      this.r.navigate(['/dashboard']);
    }


  }

  goRegistration() {
    console.log('Registration Clicked');
    this.r.navigate(['/registration']);
  }

}
