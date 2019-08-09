import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/_interfaces/IBlog';

@Component({
  selector: 'app-group-activity',
  templateUrl: './group-activity.component.html',
  styleUrls: ['./group-activity.component.css']
})
export class GroupActivityComponent implements OnInit {

  events: any[] = [];
  blogs: IBlog[] = [];

  p = 1;
  groupId: any;
  groupName: string;
  constructor(private mainService: MainService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.groupId = params.get('id');
      this.getEvents();
      this.getBlogs();
    });

  }


  getEvents() {
    this.mainService.getGroups().subscribe( res => {
      console.log(res);
      const allEvents = res.data;
      // this.allEvents = this.eventGroups;
     const eventGroup =  allEvents.find(i => i.eventGroupId === this.groupId);
     this.events = eventGroup.events;

     // name of group
    this.groupName = eventGroup.name;
    }, err => {
      console.log(err);
    });
  }

  getBlogs() {
    this.mainService.getBlogs().subscribe( res => {
      const allblogs = res.data;
      this.blogs = allblogs.filter(i => i.eventGroupId === this.groupId);

      console.log(this.blogs);
    }, err => {
      console.log(err);
    });
  }


}
