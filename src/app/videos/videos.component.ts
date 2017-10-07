import {Component, OnInit} from '@angular/core';
import {Video} from './shared/video.model';
import {VideoService} from './shared/video.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];
  videoToDelete: Video;

  constructor(private videoService: VideoService,
              private route: Router) {
  }

  ngOnInit() {
    this.videoService.get()
      .subscribe(videos => this.videos = videos);
  }

  details(video: Video) {
    this.route.navigateByUrl('video/' + video.id);
  }

  promptDelete(video, $event) {
    this.videoToDelete = video;
    $event.stopPropagation();
  }

  delete($event) {
    this.videoService.delete(this.videoToDelete.id)
      .switchMap(video => this.videoService.get())
      .subscribe(videos => this.videos = videos);
    $event.stopPropagation();
  }

  abortDelete($event) {
    this.videoToDelete = null;
    $event.stopPropagation();
  }

}
