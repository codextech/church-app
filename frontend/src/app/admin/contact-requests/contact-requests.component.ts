import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/_interfaces/IContact';
import { AdminService } from 'src/app/_services/admin.service';
import { ConfigService } from 'src/app/_services/config-datatable';
import { window } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
      key: '',
      title: ''
    },

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

  p: 1;


  constructor(private adminService: AdminService, private toastr: ToastrService) { }

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

  markAsRead(id) {
    console.log(id);

    this.adminService.requestRead(id).subscribe( res => {
      this.toastr.success('Done');
      location.reload();
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
