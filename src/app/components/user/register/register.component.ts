import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/user/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public user:User=new User()

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
  ){ }

  ngOnInit(): void {}

  onSubmit(): void {


    //set role to normal user
    // this.user.role=0;
    console.log(this.user)

    this.authService.register(

      this.user.username,
      this.user.email,
      this.user.password,

    ).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        window.location.href="/home"

      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );




    }


}

