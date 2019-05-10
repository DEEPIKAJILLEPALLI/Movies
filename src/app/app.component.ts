import { Component } from '@angular/core';
import { Movie } from './Models/movie';
import { MovieService } from './Services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesAPI';
  movies:Movie;
  Posterfullpath;
  constructor(private moviesService: MovieService){

  }
  public async ngOnInit(){
    this.movies = await this.moviesService.getMovies();
   this.Posterfullpath= this.moviesService.secure_base_url + this.movies.poster_path;
    console.log(this.movies);
    console.log(this.Posterfullpath);
  }
}
