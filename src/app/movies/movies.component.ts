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
  public secure_base_url: string="https://image.tmdb.org/t/p/original";
  Posterfullpath: string;

  constructor(private moviesService: MovieService) {

  }
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":false,
    "infinite": false
  };
  public async ngOnInit() {
    this.allMovies=await this.moviesService.getWeeklyTopMovieList().toPromise();
    this.movies=this.allMovies.results;
   

    console.log(this.movies);
  }
}
