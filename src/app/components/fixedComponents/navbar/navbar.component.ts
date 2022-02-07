import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/user/token.service';
import { UserService } from 'src/app/service/user/user.service';
import { Web3Service } from 'src/app/service/web3/web3.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  signedIn!:boolean;
  isAdmin:boolean=false
  loggedInWithMask:boolean=false
  user:any;

  constructor
  (
    private tokenStorage:TokenService,
    private web3:Web3Service
  )
  {}


  ngOnInit(): void {

    //reconnect in case of lost connection
    this.web3.LoginWithMetaMask();

    //set user to signed in
    this.signedIn=this.tokenStorage.signedIn()

    //get user data
    this.user=this.tokenStorage.getUser()

    //admin is logged in
    if(this.signedIn && this.user.roles[0]=='ROLE_ADMIN') this.isAdmin=true
  }


  logout(){
    this.tokenStorage.signOut();
    // window.location.reload();
  }

  connectWallet(){
    console.log("Connecting to wallet");
    this.web3.LoginWithMetaMask();
  }

}
