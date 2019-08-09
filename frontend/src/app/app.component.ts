import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as AOS from 'aos';
import { UserAuthService } from './_services/user-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  // title = 'app';
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private authService: UserAuthService) {}
  ngOnInit(): void {
    AOS.init();
    const token = localStorage.getItem('access_token');
    this.authService.decodedtoken = this.jwtHelper.decodeToken(token);
  }

}
