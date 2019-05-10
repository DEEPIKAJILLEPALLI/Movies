import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http.provider';
import { Movie } from '../Models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public secure_base_url: string="https://image.tmdb.org/t/p/original";
  private api_key:string="?api_key=210409d18b8e5a398e31d058715c7eb0";
  private url:string="https://api.themoviedb.org/3/";
  private commonTrendingURL=this.url+"trending/";

  allTypes:string=this.commonTrendingURL+ "all/day"+this.api_key;
  movies:string=this.commonTrendingURL+"movie/day"+this.api_key;
  tvShows:string=this.commonTrendingURL+ "tv/day"+this.api_key;
  persons:string=this.commonTrendingURL+ "person/week"+this.api_key;
  allTypesW:string=this.commonTrendingURL+ "all/week"+this.api_key;
  moviesW:string=this.commonTrendingURL+ "movie/week"+this.api_key;
  tvShowsW:string=this.commonTrendingURL+ "tv/week"+this.api_key;
  personsW:string=this.commonTrendingURL+ "person/week"+this.api_key;

  constructor(private http: HttpProvider) { }
  public getMovies(): any {
    return this.http.get<Array<Movie>>(this.url+'movie/299534'+this.api_key).toPromise();
}
}
