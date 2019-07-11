import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/_interfaces/IBlog';
import { MainService } from 'src/app/_services/main.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog: IBlog = {
    blogId : '',
    blogDescription: '',
    blogShortDescription: '',
    blogImage: '',
    blogTitle: ''
  };
  id: string;
  constructor(private mainService: MainService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      });
    this.getBlogDetails();
  }

  getBlogDetails() {
    this.mainService.getBlogDetails(this.id).subscribe( res => {
      this.blog = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
