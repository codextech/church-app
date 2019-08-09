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

  groupModel: any = {eventGroupId: '', name: '', description: '', isDefault: false, image: null};
  groups: any[] = [];
  imagePreview: any;

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


    if (this.groupModel.image) {
      const formData = new FormData();
      formData.append('image', this.groupModel.image);
      formData.append('name', this.groupModel.name);
      formData.append('description', this.groupModel.description);
      formData.append('isDefault', this.groupModel.isDefault);

      this.adminService.addGroup(formData).subscribe( res => {

        this.groupModel.eventGroupId = res.data.eventGroupId;
        // this.groups.push(this.groupModel);
        location.reload();
      this.toastr.success('Added');

      }, err => {
        console.log(err);
      });
    } else {
      this.toastr.error('Please upload Group Image');
    }

  }

  deleteGroup(id) {
    this.adminService.deleteGroup(id).subscribe( res => {
    this.toastr.success('Deleted');
    location.reload();
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


  onImagePicked(event) {
    const file = (event.target as any).files[0];
    if (file) {
      this.groupModel.image = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // preview of image & change Check background Image
      };
      reader.readAsDataURL(file);
    }
  }

  cancelImagePreview() {
    this.groupModel.image =  null;
    this.imagePreview = null;
  }


}
