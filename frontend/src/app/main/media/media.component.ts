import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  media: any[] = [];
  p: any;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getMedia();
  }

  getMedia() {
    this.mainService.getMedia().subscribe( res => {
      this.media = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
