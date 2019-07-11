import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedUIModule } from './admin-shared-ui/admin-shared-ui.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactRequestsComponent } from './contact-requests/contact-requests.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { TableModule } from 'ngx-easy-table';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AdminSharedUIModule,
    DropzoneModule,
    TableModule,
    RichTextEditorAllModule,
    NgxSmartModalModule.forChild(),

  ],
  declarations: [
    DashboardComponent,
    ContactRequestsComponent,
    AddGroupComponent,
    AddBlogComponent,
    AddEventComponent,
    AddUserComponent
  ]
})
export class AdminModule { }
