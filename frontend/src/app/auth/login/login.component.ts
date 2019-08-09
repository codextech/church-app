import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInModel: any = {};
  returnUrl: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: UserAuthService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  logIn() {

    this.authService.userLogIn(this.logInModel).subscribe(res => {
        this.router.navigateByUrl('/admin/dashboard');
        this.toastr.success('Welcome');

    }, err => {
      console.log(err);
      this.toastr.error(err.error.message);
    });


  }

}
