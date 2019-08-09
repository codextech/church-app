import { Component, OnInit, ViewChild } from '@angular/core';
import { DropzoneDirective, DropzoneComponent, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {


  public config: DropzoneConfigInterface = {
    url: `${environment.apiUrl}api/admin/media`,
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


  mediaModel: any = {};


  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }



  addMedia() {
    this.drpzone.directiveRef.dropzone().processQueue();
  }

  onSending(_filesEvent): any {
    if (_filesEvent) {
       const formData = _filesEvent[2];
       formData.append('title', this.mediaModel.title);
       formData.append('description', this.mediaModel.description);
    }
  }

  public onUploadError(args: any): void {
    console.log('error:', args);
    this.toastr.error('Something Wrong');


  }
  public onSuccess(args: any): void {
    this.toastr.info('Media added');

  }


}
