import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Video} from '../shared/video.model';
import {VideoService} from '../shared/video.service';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {
  videoGroup: FormGroup;
  constructor(private fb: FormBuilder,
              private videoService: VideoService) {
    this.videoGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
  }

  saveVideo() {
    const values = this.videoGroup.value;

    const newVideo: Video = {
      title: values.title
    };
    this.videoService.create(newVideo)
      .subscribe(video => {
        this.videoGroup.reset();
      });
  }
}
