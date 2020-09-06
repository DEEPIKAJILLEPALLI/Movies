import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Models/movie';


@Component({
  selector: 'app-movies-container',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.scss']
})
export class MoviesearchComponent implements OnInit {

  constructor(private moviesService: MovieService) { }

  Searchdata: string;
  allMovies;
  ngOnInit() {
  }
  OnInputChange(event: any) { 
    this.Searchdata = event.target.value;
  }

  public async getMovieList(){
    debugger;
    if( this.Searchdata !== '' && this.Searchdata != null )
    {
      let data;
      data = await this.moviesService.getSearchList(this.Searchdata).toPromise();
      this.allMovies = data;
    }
  }
}
