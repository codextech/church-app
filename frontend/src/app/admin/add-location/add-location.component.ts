import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { MainService } from 'src/app/_services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  constructor(private adminService: AdminService, private mainService: MainService,
    private toastr: ToastrService) { }


  locations: any[] = [];
  locationModel: any = {};

  ngOnInit() {
    this.getLocations();
  }


  getLocations() {
    this.mainService.getLocations().subscribe( res => {
      this.locations = res.data;
    }, err => {
      console.log(err);
    });
  }



  addLocation() {

      this.adminService.addLocation(this.locationModel).subscribe( res => {

        // this.groups.push(this.groupModel);
        location.reload();
      this.toastr.success('Added');

      }, err => {
        console.log(err);
      });
    }

  deleteLocation(id) {
    this.adminService.deleteLocation(id).subscribe( res => {
    this.toastr.success('Deleted');
    location.reload();
    }, err => {
      console.log(err);
    });
  }



}
