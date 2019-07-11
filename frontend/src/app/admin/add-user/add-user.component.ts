import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_services/config-datatable';
import { AdminService } from 'src/app/_services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userModel: any = {eventGroupId: '', name: ''};
  users: any[] = [];

  configuration = ConfigService.config;
  columns = [

    {
      key: 'group',
      title: 'Name'
    },

    {
      key: 'actions', title: ''
    }
  ];


  constructor(private adminService: AdminService,
    private toastr: ToastrService) { }


  ngOnInit() {
  }

  addUser() {
    this.adminService.addUser(this.userModel).subscribe( res => {
      this.toastr.success('User Added');
    }, err => {
      console.log(err);
    });
  }
}
