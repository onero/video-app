import {Component, OnInit} from '@angular/core';
import {Video} from './shared/video.model';
import {VideoService} from './shared/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.videoService.get()
      .subscribe(videos => this.videos = videos);
  }

}
