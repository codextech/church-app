import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventGroups: any[] = [];
  events: any[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.mainService.getGroups().subscribe( res => {
      console.log(res);
      this.eventGroups = res.data;
     const eventGroup =  this.eventGroups.find(i => i.isDefault === true);
     this.events = eventGroup.events;
    }, err => {
      console.log(err);
    });
  }

  onGroupClick(id){
    const eventGroup =  this.eventGroups.find(i => i.eventGroupId === id);
    this.events =  eventGroup.events;

  }

}
