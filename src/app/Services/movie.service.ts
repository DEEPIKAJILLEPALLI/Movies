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

  DallTypes:string=this.commonTrendingURL+ "all/day"+this.api_key;
  Dmovies:string=this.commonTrendingURL+"movie/day"+this.api_key;
  DtvShows:string=this.commonTrendingURL+ "tv/day"+this.api_key;
  Dpersons:string=this.commonTrendingURL+ "person/day"+this.api_key;
  allTypesW:string=this.commonTrendingURL+ "all/week"+this.api_key;
  moviesW:string=this.commonTrendingURL+ "movie/week"+this.api_key;
  tvShowsW:string=this.commonTrendingURL+ "tv/week"+this.api_key;
  personsW:string=this.url+"trending/person/week"+this.api_key;
  multiSearch:string=this.url+"search/multi"+this.api_key;
  

  constructor(private http: HttpProvider) { }

getWeeklyTopList(): Observable<Movie[]> {
  return this.http.get(this.allTypesW)
      .pipe(map(res => <Movie[]>res));
}

getWeeklyTopMovieList(): Observable<Movie[]> {
  return this.http.get(this.moviesW)
      .pipe(map(res => <Movie[]>res));
}
getWeeklyTopTvShowsList(): Observable<Movie[]> {
  return this.http.get(this.tvShowsW)
      .pipe(map(res => <Movie[]>res));
}

getWeeklyTopPersonsList(): Observable<Movie[]> {
  return this.http.get(this.personsW)
      .pipe(map(res => <Movie[]>res));
}
getDayTopList(): Observable<Movie[]> {
  return this.http.get(this.DallTypes)
      .pipe(map(res => <Movie[]>res));
}

getDayTopTvShowsList(): Observable<Movie[]> {
  return this.http.get(this.DtvShows)
      .pipe(map(res => <Movie[]>res));
}
getDayTopMovieList(): Observable<Movie[]> {
  return this.http.get(this.Dmovies)
      .pipe(map(res => <Movie[]>res));
}
getDailyTopPersonsList(): Observable<Movie[]> {
  return this.http.get(this.Dpersons)
      .pipe(map(res => <Movie[]>res));
}
getInfo(id:string,media_type:string):Observable<Movie>{
  return this.http.get(this.url+media_type+"/"+ id + this.api_key)
  .pipe(map(res => <Movie>res));
}
getSearchList(search:string): Observable<Movie[]>{
  return this.http.get(this.multiSearch+"&query="+search).pipe(map(res => <Movie[]>res));
}
}
