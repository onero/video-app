import { Component, OnInit } from '@angular/core';
import {Video} from './video/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];

  constructor() {
    this.videos = [
      {
        Title: 'Die Hard',
        Img: 'https://goo.gl/JMvA2n'
      },
      {
        Title: 'Titanic',
        Img: 'https://goo.gl/laexwR'
      }
    ];
  }

  ngOnInit() {
  }

}
