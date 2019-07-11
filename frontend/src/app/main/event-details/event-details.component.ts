import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  id: string;
  event: any = {};
  constructor(private mainService: MainService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      });
    this.getEventDetails();
  }

  getEventDetails() {
    this.mainService.getEventDetails(this.id).subscribe( res => {
      this.event = res.data;
    }, err => {
      console.log(err);
    });
  }

}
