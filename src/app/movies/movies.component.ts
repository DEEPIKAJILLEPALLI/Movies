import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allWeeklyTops;
  allDailyTops;
  allMovies;
  allTvShows;
  allTopPersons;
  allWMovies;
  allWTvShows;
  allWTopPersons;
  weeks = [];
  count = 0;
  public secure_base_url: string = "https://image.tmdb.org/t/p/original";


  constructor(private moviesService: MovieService) {

  }
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": false,
    "infinite": false
  };
  public pushData(element) {
    if (this.count < 12) {
      this.count++;
      this.weeks.push(element);
    }
  }
  
  public async ngOnInit() {
    let data;
    data = await this.moviesService.getWeeklyTopList().toPromise();
    this.allWeeklyTops = data.results;
    data.results.forEach(element => {
      this.pushData(element);
    });
    console.log(this.weeks);
//     let cnt = 0;
// this.weeks=[];
//     this.allWeeklyTops.forEach(ele => {
//       if (cnt != 0 && cnt <=12) {
//         this.weeks.push(ele);
//       }
//       cnt++;
//     });
    console.log(this.weeks);
    data = await this.moviesService.getWeeklyTopMovieList().toPromise();
    this.allWMovies = data.results;
    data = await this.moviesService.getWeeklyTopTvShowsList().toPromise();
    this.allWTvShows = data.results;
    data = await this.moviesService.getWeeklyTopPersonsList().toPromise();
    this.allWTopPersons = data.results;
    data = await this.moviesService.getDayTopList().toPromise();
    this.allDailyTops = data.results;
    data = await this.moviesService.getDayTopMovieList().toPromise();
    this.allMovies = data.results;
    data = await this.moviesService.getDayTopTvShowsList().toPromise();
    this.allTvShows = data.results;
    data = await this.moviesService.getDailyTopPersonsList().toPromise();
    this.allTopPersons = data.results;


  }
  public RightArrowClicked() {
    let cnt = 0;
    this.weeks=[];
        this.allWeeklyTops.forEach(ele => {
      if (cnt != 0 && cnt <=12) {
        this.weeks.push(ele);
      }
      cnt++;
    });
    console.log(this.weeks);
    window.alert('hello');

  }
  
}
