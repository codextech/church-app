import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_services/config-datatable';
import { AdminService } from 'src/app/_services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/_services/main.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userModel: any = {eventGroupId: '', name: ''};
  users: any[] = [];
  groups: any[] = [];

  p = 1;
  configuration = ConfigService.config;
  columns = [

    {
      key: 'name',
      title: 'Name'
    },
    {
      key: 'password',
      title: 'Password'
    },
    {
      key: 'group',
      title: 'Group'
    },

    {
      key: 'actions', title: ''
    }
  ];


  constructor(private adminService: AdminService, private mainService: MainService,
    private toastr: ToastrService) { }


  ngOnInit() {
    this.getGroups();
    this.getUsers();
  }
  getUsers() {
    this.adminService.getUsers().subscribe( res => {
      console.log(res);
      this.users = res.data;
    }, err => {
      console.log(err);
    });
  }

  getGroups() {
    this.mainService.getGroups().subscribe( res => {
      console.log(res);
      this.groups = res.data;
    }, err => {
      console.log(err);
    });
  }

  addUser() {
    this.adminService.addUser(this.userModel).subscribe( res => {
      this.toastr.success('User Added');
    }, err => {
      console.log(err);
    });
  }



}
