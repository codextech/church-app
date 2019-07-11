import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { ContactRequestsComponent } from 'src/app/admin/contact-requests/contact-requests.component';
import { AddBlogComponent } from 'src/app/admin/add-blog/add-blog.component';
import { AddGroupComponent } from 'src/app/admin/add-group/add-group.component';
import { AddEventComponent } from 'src/app/admin/add-event/add-event.component';
import { AddUserComponent } from 'src/app/admin/add-user/add-user.component';

export const ADMIN_LAYOUTS_ROUTES: Routes = [


  {
    path: 'admin',
  children: [
      {
          path: 'dashboard',
          component: DashboardComponent
      },

      {
        path: 'add-blog',
        component: AddBlogComponent
    },
     {
      path: 'contact-requests',
      component: ContactRequestsComponent
  },

  {
    path: 'add-group',
    component: AddGroupComponent
},

{
  path: 'add-event',
  component: AddEventComponent
},

{
  path: 'add-user',
  component: AddUserComponent
},


    ]
  }

];
