import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/_services/config-datatable';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

  p = 1;
  scubscribers: any[] = [];
  configuration = ConfigService.config;
  columns = [

    {
      key: 'email',
      title: 'Email'
    },


    {
      key: 'actions', title: ''
    }
  ];



  constructor(private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getSubscribers();
  }

  getSubscribers() {
    this.adminService.getSubscribers().subscribe( res => {
      this.scubscribers = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
