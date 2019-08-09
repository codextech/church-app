import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { ToastrService } from 'ngx-toastr';
import { INewsLetter } from 'src/app/_interfaces/INewsLetter';
import { SwiperOptions } from 'swiper';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { globals } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latestEvents: any = {};
  nextEventDate: any;
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 20,
    slidesPerView: 2,
    breakpointsInverse: true,
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },

    fadeEffect: {
      crossfade: true
    }

  };

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    margin: 20,
    nav: true,
    center: true,
    autoplay: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items:3,
            nav:false
        },
        1000:{
            items:3,
        }
    }
  };

  newsLetterModel: INewsLetter = {email: ''};
  blogs: any[] = [];
  events: any[] = [];
  cars: any[] =[];
  media: any[] =[];
  groups: any[] =[];
  totalEvents: any;


  selectedIndex: any;
  selectedItem: any;
  constructor(private mainService: MainService, private toastr: ToastrService) {

    this.cars = [
      {vin: 'r3278r2'},
      {vin: 'jhto2g2'},
      {vin: 'h453w54'},
      {vin: 'h453w54'},
      {vin: 'h453w54'},
      {vin: 'h453w54'},
      {vin: 'g43gwwg'},];

  }

  ngOnInit() {
    this.getBlogs();
    this.getEvents();
    this.getMedia();
    this.getGroups();
  }


  getGroups() {
    this.mainService.getGroups().subscribe( res => {
      console.log(res);
     const groups = res.data;
      this.groups = _.orderBy(groups, [g => g.name.toLowerCase()], ['asc']);
    }, err => {
      console.log(err);
    });
  }


  getMedia() {
    this.mainService.getMedia().subscribe( res => {
      this.media = res.data;
      this.media = [...this.media.slice(0, 3)];
    }, err => {
      console.log(err);
    });
  }

  addNewsLetter() {

    this.mainService.addToNewsLetter(this.newsLetterModel).subscribe( res => {
     this.toastr.show('Thank you for subscription');
    this.newsLetterModel = {email: ''};
    }, err => {
      console.log(err);
    });

  }

  getBlogs() {
    this.mainService.getBlogs().subscribe( res => {
      this.blogs = res.data;
      this.blogs = [...this.blogs.slice(0, 4)];

      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  getEvents() {
    this.mainService.getEvents().subscribe( res => {
      console.log(res);
      this.events = res.data;
      this.totalEvents = this.events.length;
      globals.totalEvents = this.events.length; // global define in environemnt.prod
    // ============get next event==============


  //  const sortedEvents = this.events.sort(function(a, b) {
  //     return   +Date.now - +new Date(b.eventDate);
  //   });
  const localTime = moment.tz(moment(), 'America/New_York').format();
    const sortedEvents = (this.events.filter(a => {
     console.log(localTime);
      return new Date(a.eventDate).getTime() >= new Date(localTime).getTime();
    }));

    this.events = sortedEvents;
    if (this.events.length > 0) {
      this.latestEvents = this.events[sortedEvents.length - 1];
    }

    }, err => {
      console.log(err);
    });
  }

/*   get geteventDate(): any {
   const date =
    this.latestEvents.eventDate != null ? moment(this.latestEvents.eventDate).format('lll')  : null;
    return date;
  } */

}
