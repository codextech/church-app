import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { DropzoneConfigInterface, DropzoneComponent, DropzoneDirective } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private mainService: MainService,
    private authService: UserAuthService,
     private toastr: ToastrService) { }

  groups: any [] = [];
  eventModel: any = {};

  public config: DropzoneConfigInterface = {
    url: `${environment.apiUrl}api/admin/event`,
     clickable: true,
     uploadMultiple: false,
     autoProcessQueue: false,
     parallelUploads: 100,
     createImageThumbnails: true,
     autoReset: 2000,
     errorReset: null,
     cancelReset: null
   };
   @ViewChild(DropzoneComponent) drpzone?: DropzoneComponent;
  @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective;

  insertImageConfig = {
    // saveUrl: `${environment.apiUrl}api/admin/blogimages`,
    // path: `${environment.apiUrl}uploads/`
};
  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.mainService.getGroups().subscribe( res => {
      this.groups = res.data;
      if (this.authService.getGroupId) {
      this.groups =  this.groups.filter(i => i.eventGroupId === this.authService.getGroupId);
         this.eventModel.eventGroupId = this.groups[0].eventGroupId;



    }
      console.log(res);
    }, err => {
      console.log(err);
    });
  }



  addEvent() {
    this.drpzone.directiveRef.dropzone().processQueue();
  }

  onSending(_filesEvent): any {
    if (_filesEvent) {
       const formData = _filesEvent[2];
       formData.append('eventGroupId', this.eventModel.eventGroupId);
       formData.append('eventTitle', this.eventModel.eventTitle);
       formData.append('eventDescription', this.eventModel.eventDescription);
       formData.append('eventShortDescription', this.eventModel.eventShortDescription);
       formData.append('eventDate', this.eventModel.eventDate);
       formData.append('location', this.eventModel.location);
    }
  }

  public onUploadError(args: any): void {
    console.log('error:', args);
    this.toastr.error('Something Wrong');


  }
  public onSuccess(args: any): void {
    this.toastr.success('Request Submitted');

  }

}
