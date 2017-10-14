import {Genre} from '../../genres/shared/genres.model';

export class Video {
  id?: number;
  title: string;
  genreIds?: number[];
  genres?: Genre[];
}
