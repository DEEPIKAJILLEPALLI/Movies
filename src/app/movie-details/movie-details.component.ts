import { MovieService } from './../Services/movie.service';
import { Movie } from './../Models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  type: string;

  constructor(private route: ActivatedRoute,private movieService:MovieService) { }
  movieId;
  movie:Movie;
  data;
  public secure_base_url: string = "https://image.tmdb.org/t/p/original";


  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get("movieId");
      this.type=params.get("type");
    })
    console.log(this.movieId)
    // this.movie=this.movieService.getMovieInfo(this.movieId).toPromise<Movie>();
    this.movieService.getInfo(this.movieId,this.type).subscribe(
      response => {
        if (!response) {
          console.log(Error)
        } else {
          console.log(response);
          this.movie = response
        }
      });
      console.log(this.movie)


  }

}
