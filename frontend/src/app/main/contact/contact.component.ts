import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { IContact } from 'src/app/_interfaces/IContact';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactModel: IContact = {
    name: '',
    message: '',
    email: '',
    subject: '',
    isRead: false
  };
  constructor(private mainService: MainService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  postRequest() {
      this.mainService.addUserRequest(this.contactModel).subscribe( res => {
        console.log(res);
        // this.router.navigateByUrl('/');
        this.contactModel = { name: '',
        message: '',
        email: '',
        subject: '',
        isRead: false};
      this.toastr.success('We will contact you soon');
      }, err => {
        console.log(err);
      });
  }


}
