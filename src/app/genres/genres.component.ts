import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Genre} from './shared/genres.model';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  @Input()
  genres: Genre[];
  genreGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.genreGroup = fb.group({
      name: ''
    });
  }

  ngOnInit() {
  }

  deleteGenre(indexToDelete, $event) {
    $event.preventDefault();
    this.genres.splice(indexToDelete, 1);
  }

  saveGenre() {
    const values = this.genreGroup.value;
    this.genres.push({
      name: values.name
    });
    this.genreGroup.reset();
  }
}
