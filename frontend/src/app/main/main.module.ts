import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUIModule } from './shared-ui/shared-ui.module';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SafeHtmlPipe } from '../_pipe/safeHtml.pipe';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SafeUrlPipe } from '../_pipe/safeUrl.pipe';


@NgModule({
  imports: [
    CommonModule,
    SharedUIModule,
    RouterModule,
    FormsModule,
  ],

  declarations: [
    AboutComponent,
    EventDetailsComponent,
    EventsComponent,
    HomeComponent,
    ContactComponent,
    BlogsComponent,
    BlogDetailsComponent,
    SafeHtmlPipe,
    SafeUrlPipe
  ],
  exports: [SafeHtmlPipe,SafeUrlPipe]
})
export class MainModule { }
