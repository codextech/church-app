import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  groups: any[] = [];
  constructor(private mainService: MainService) { }

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
