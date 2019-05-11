import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http.provider';
import { Movie } from '../Models/movie';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private api_key:string="?api_key=210409d18b8e5a398e31d058715c7eb0";
  private url:string="https://api.themoviedb.org/3/";
  private commonTrendingURL=this.url+"trending/";

  allTypes:string=this.commonTrendingURL+ "all/day"+this.api_key;
  Dmovies:string=this.commonTrendingURL+"movie/day"+this.api_key;
  DtvShows:string=this.commonTrendingURL+ "tv/day"+this.api_key;
  Dpersons:string=this.commonTrendingURL+ "person/week"+this.api_key;
  allTypesW:string=this.commonTrendingURL+ "all/week"+this.api_key;
  moviesW:string=this.commonTrendingURL+ "movie/week"+this.api_key;
  tvShowsW:string=this.commonTrendingURL+ "tv/week"+this.api_key;
  personsW:string=this.commonTrendingURL+ "person/week"+this.api_key;

  constructor(private http: HttpProvider) { }

getWeeklyTopMovieList(): Observable<Movie[]> {
  return this.http.get(this.allTypesW)
      .pipe(map(res => <Movie[]>res));
}
getDayTopMovieList(): Observable<Movie[]> {
  return this.http.get(this.moviesW)
      .pipe(map(res => <Movie[]>res));
}
}
