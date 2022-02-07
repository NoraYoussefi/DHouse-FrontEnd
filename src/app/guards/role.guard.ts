import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/user/token.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private tokenService:TokenService, private router:Router){

  }
  canActivate(){
  if(this.tokenService.signedInAsAdmin()){
    return true;
  }
  this.router.navigate(['/home'])
  return false;
  }
  
}
