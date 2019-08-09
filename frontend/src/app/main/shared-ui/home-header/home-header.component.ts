import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  groups: any[] = [];
  constructor(private mainService: MainService) { }

  ngOnInit() {
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

}
