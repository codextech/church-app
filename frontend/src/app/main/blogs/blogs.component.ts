import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { IBlog } from 'src/app/_interfaces/IBlog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: IBlog[] = [];
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.mainService.getBlogs().subscribe( res => {
      this.blogs = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
