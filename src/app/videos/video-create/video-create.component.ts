import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/observable/forkJoin';
import {VideoService} from '../shared/video.service';
import {GenreService} from '../../genres/shared/genre.service';
import {Genre} from '../../genres/shared/genres.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {
  videoGroup: FormGroup;
  displayVideoCreatedAlert= false;
  genresIn: Genre[];
  constructor(private fb: FormBuilder,
              private videoService: VideoService,
              private genreService: GenreService) {
    this.videoGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
    this.genresIn = [];
  }

  saveVideo() {
    const values = this.videoGroup.value;
    const genreIds = [];
    const genreRequests = [];
    this.genresIn.forEach(genre => {
      genreRequests.push(
        this.genreService.create(genre)
          .map(genreBack => {
            console.log(genreBack.id);
            genreIds.push(genreBack.id);
          }));
    });
    Observable.forkJoin(genreRequests)
      .switchMap(() =>
      this.videoService.create({
        title: values.title,
        genreIds: genreIds
      })
      )
      .subscribe(video => {
        this.videoGroup.reset();
        this.displayVideoCreatedAlert = true;
        this.genresIn = [];
        setTimeout(() => {
          this.displayVideoCreatedAlert = false;
        }, 3000);
      });
  }

  isInvalid(controlName: string) {
    const control = this.videoGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }
  isValid(controlName: string) {
    const control = this.videoGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }

  closeAlert() {
    this.displayVideoCreatedAlert = false;
  }
}
