import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../service/user/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService:TokenService,
    private router:Router
  )
  {}


  canActivate()
  {
    if(this.tokenService.signedIn()){
      return true;
    }
    this.router.navigate(['/login'])
    
    return false;
  }

  
}
