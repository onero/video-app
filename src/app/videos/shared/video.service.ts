import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Video} from './video.model';

const url = environment.apiURL + '/videos';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) { }

  get(): Observable<Video[]> {
    return this.http
      .get<Video[]>(url);
  }

  getById(id: number): Observable<Video> {
    return this.http
      .get<Video>(url + '/' + id);
  }

  delete(id: number): Observable<Video> {
    return this.http.delete(url + '/' + id);
  }

  create(video: Video): Observable<Video> {
    return this.http.post(url, video);
  }
}
