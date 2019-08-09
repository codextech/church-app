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
import { CountUpModule } from 'countup.js-angular2';
import { MediaComponent } from './media/media.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { CountdownModule } from 'ng2-countdown-timer';
import {NgxPaginationModule} from 'ngx-pagination';
import { GroupActivityComponent } from './group-activity/group-activity.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    CommonModule,
    SharedUIModule,
    RouterModule,
    FormsModule,
    CountUpModule,
    Ng2CarouselamosModule,
    NgxUsefulSwiperModule,
    CountdownTimerModule,
    CountdownModule,
    NgxPaginationModule,
    CarouselModule
  ],

  declarations: [
    AboutComponent,
    EventDetailsComponent,
    EventsComponent,
    HomeComponent,
    ContactComponent,
    BlogsComponent,
    BlogDetailsComponent,
    MediaComponent,
    SafeHtmlPipe,
    SafeUrlPipe,
    GroupActivityComponent
  ],
  exports: [SafeHtmlPipe,SafeUrlPipe]
})
export class MainModule { }
