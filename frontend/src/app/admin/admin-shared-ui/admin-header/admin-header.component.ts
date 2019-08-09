import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public authService: UserAuthService,
              private router: Router,) { }

  ngOnInit() {
  }

  logout() {
    this.authService.decodedtoken = null;
    this.authService.usertoken = null;
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
