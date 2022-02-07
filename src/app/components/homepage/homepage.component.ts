import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/user/token.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  

  constructor(
    private tokenService:TokenService
  ) { }

  ngOnInit(): void {
  }

}
