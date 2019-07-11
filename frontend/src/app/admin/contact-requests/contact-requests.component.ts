import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/_interfaces/IContact';
import { AdminService } from 'src/app/_services/admin.service';
import { ConfigService } from 'src/app/_services/config-datatable';

@Component({
  selector: 'app-contact-requests',
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.css']
})
export class ContactRequestsComponent implements OnInit {

  contacts: IContact[] = [];

  configuration = ConfigService.config;
  columns = [

    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'email',
      title: 'Email'
    },

    {
      key: 'phone',
      title: 'Phone'
    },

    {
      key: 'country',
      title: 'Country'
    },

    {
      key: 'message',
      title: 'Message'
    },

    {
      key: 'actions', title: ''
    }
  ];



  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.adminService.getUnReadRequests().subscribe( res => {
      this.contacts = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
