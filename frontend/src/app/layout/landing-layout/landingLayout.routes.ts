import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/main/home/home.component';
import { AboutComponent } from 'src/app/main/about/about.component';
import { ContactComponent } from 'src/app/main/contact/contact.component';
import { BlogsComponent } from 'src/app/main/blogs/blogs.component';
import { BlogDetailsComponent } from 'src/app/main/blog-details/blog-details.component';
import { EventsComponent } from 'src/app/main/events/events.component';
import { EventDetailsComponent } from 'src/app/main/event-details/event-details.component';
import { MediaComponent } from 'src/app/main/media/media.component';
import { GroupActivityComponent } from 'src/app/main/group-activity/group-activity.component';




export const LANDING_LAYOUTS_ROUTES: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'blogs', component: BlogsComponent },

  { path: 'blog-details/:id', component: BlogDetailsComponent },

  { path: 'events', component: EventsComponent },

  { path: 'event-details/:id', component: EventDetailsComponent },

  { path: 'media', component: MediaComponent },

  { path: 'group/:id', component: GroupActivityComponent },


];
