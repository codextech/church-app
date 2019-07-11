import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { ToastrService } from 'ngx-toastr';
import { INewsLetter } from 'src/app/_interfaces/INewsLetter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsLetterModel: INewsLetter = {email: ''};
  blogs: any[] = [];
  events: any[] = [];

  constructor(private mainService: MainService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getBlogs();
    this.getEvents();
  }

  addNewsLetter(){

    this.mainService.addToNewsLetter(this.newsLetterModel).subscribe( res => {
    // this.toastr.info('');
    this.newsLetterModel = {email: ''};
    }, err => {
      console.log(err);
    });

  }

  getBlogs() {
    this.mainService.getBlogs().subscribe( res => {
      this.blogs = res.data;
      this.blogs = [...this.blogs.slice(0, 3)];

      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  getEvents() {
    this.mainService.getEvents().subscribe( res => {
      console.log(res);
      this.events = res.data;
      this.events = [...this.events.slice(0, 2)];
    }, err => {
      console.log(err);
    });
  }

}
