import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DropzoneConfigInterface, DropzoneComponent, DropzoneDirective } from 'ngx-dropzone-wrapper';
import { IBlog } from 'src/app/_interfaces/IBlog';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/_services/user-auth.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AddBlogComponent implements OnInit {
  public config: DropzoneConfigInterface = {
    url: `${environment.apiUrl}api/admin/blog`,
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

  blogModel: IBlog = {
    blogId: '',
    blogTitle: '',
    blogShortDescription: '',
    blogDescription: '',
    eventGroupId: '',
    blogImage: null
  };

  insertImageConfig = {
    saveUrl: `${environment.apiUrl}api/admin/blogimages`,
    path: `${environment.apiUrl}uploads/`
};

  constructor(private toastr: ToastrService, private authService: UserAuthService) { }

  ngOnInit() {
  }



  addBlog() {
    this.drpzone.directiveRef.dropzone().processQueue();
  }

  onSending(_filesEvent): any {
    if (_filesEvent) {
       const formData = _filesEvent[2];
       formData.append('blogTitle', this.blogModel.blogTitle);
       formData.append('blogDescription', this.blogModel.blogDescription);


       const groupId = this.authService.getGroupId;
       this.blogModel.eventGroupId = groupId;
       formData.append('eventGroupId', this.blogModel.eventGroupId);

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
