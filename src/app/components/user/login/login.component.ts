import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/user/auth.service';
import { TokenService } from 'src/app/service/user/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  user!:''


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenService,private router:Router) {

  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      console.log("user logged in")
      this.isLoggedIn = true; //set user to logged in
      this.roles = this.tokenStorage.getUser().roles; //get user roles
      this.user=this.tokenStorage.getUser() //get user
      console.log(this.roles)
      console.log(this.user)
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    console.log(this.form)

    this.authService.login(username, password).subscribe(
      data => {
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        window.location.href="/home"
      },
      err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }








}


