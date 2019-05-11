import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies ;
  allMovies;
  constructor(private moviesService: MovieService) {

  }
  public async ngOnInit() {
    this.allMovies=await this.moviesService.getWeeklyTopMovieList().toPromise();
    this.movies=this.allMovies.results
    console.log(this.movies);
  }
}
