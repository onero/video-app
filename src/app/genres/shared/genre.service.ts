import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Genre} from './genres.model';
import {Observable} from 'rxjs/Observable';

const url = environment.apiURL + '/genres';

@Injectable()
export class GenreService {

  constructor(private http: HttpClient) { }

  create(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(url, genre);
  }
}
