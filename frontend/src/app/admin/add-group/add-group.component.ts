import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_services/config-datatable';
import { AdminService } from 'src/app/_services/admin.service';
import { MainService } from 'src/app/_services/main.service';
import { ToastrService } from 'ngx-toastr';
import { IGroup } from 'src/app/_interfaces/IGroup';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  groupModel: IGroup = {eventGroupId: '', name: '', isDefault: false};
  groups: IGroup[] = [];

  configuration = ConfigService.config;
  columns = [

    {
      key: 'group',
      title: 'Group Name'
    },

    {
      key: 'actions', title: ''
    }
  ];


  constructor(private adminService: AdminService, private mainService: MainService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getGroups();
  }

  addGroup() {
    this.adminService.addGroup(this.groupModel).subscribe( res => {

      this.groupModel.eventGroupId = res.data.eventGroupId;
      this.groups.push(this.groupModel);
    this.toastr.success('Added');

    }, err => {
      console.log(err);
    });
  }

  deleteGroup(id) {
    this.adminService.deleteGroup(id).subscribe( res => {
    this.toastr.success('Deleted');
    }, err => {
      console.log(err);
    });
  }

  getGroups() {
    this.mainService.getGroups().subscribe( res => {
      this.groups = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }



}
