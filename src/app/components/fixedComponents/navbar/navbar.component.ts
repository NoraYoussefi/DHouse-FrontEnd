import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/user/token.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  signedIn!:boolean;
  user:any;

  constructor(private tokenStorage:TokenService,private userService:UserService) {
    this.signedIn=this.tokenStorage.signedIn()
    this.user=this.tokenStorage.getUser().user
   }

  ngOnInit(): void {
  }


  logout(){
    this.tokenStorage.signOut();
  }

  connectWallet(){
    console.log("Connecting to wallet")
  }

}
