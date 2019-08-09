import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { SwiperOptions } from 'swiper';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { globals } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  totalEvents = globals.totalEvents;
  groups: any[] = [];

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView: 4,
  };

  constructor(private mainService: MainService) { }


  owlCustomOptions: OwlOptions = {
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

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.mainService.getGroups().subscribe( res => {
      console.log(res);
      this.groups = res.data;
    }, err => {
      console.log(err);
    });
  }


}
