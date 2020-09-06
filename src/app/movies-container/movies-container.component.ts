import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { Movie } from '../Models/movie';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent implements OnInit {

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
  width;
  cnt;
  Unshiftedeles=[];
  LeftCounter=0;

  constructor(private moviesService: MovieService,
    private router:  Router
    ) {

  }
  onSubmit() {  
    this.router.navigate(['/search']);  
}  

  public pushData(element, count) {
    if (this.count < count - 2) {
      this.count++;
      this.weeks.push(element);
    }
  }

  public async ngOnInit() {
    this.width =  screen.width;
    this.width /= 150
    this.cnt = this.width - 2;
    let data;
    data = await this.moviesService.getWeeklyTopList().toPromise();
    this.allWeeklyTops = data.results;
    data.results.forEach(element => {
      let count=0;
      this.pushData(element, this.width);
      count++;
    });
    data = await this.moviesService.getWeeklyTopMovieList().toPromise();
    this.allWMovies = data.results;
    data.results.forEach(element => {
      this.pushData(element, this.width);
    });


    data = await this.moviesService.getWeeklyTopTvShowsList().toPromise();
    this.allWTvShows = data;
    data = await this.moviesService.getWeeklyTopPersonsList().toPromise();
    this.allWTopPersons = data;
    data = await this.moviesService.getDayTopList().toPromise();
    this.allDailyTops = data;
    data = await this.moviesService.getDayTopMovieList().toPromise();
    this.allMovies = data;
    data = await this.moviesService.getDayTopTvShowsList().toPromise();
    this.allTvShows = data;
    data = await this.moviesService.getDayTopTvShowsList().toPromise();
    this.allTvShows = data;
    data = await this.moviesService.getDailyTopPersonsList().toPromise();
    this.allTopPersons = data.results;


  }
  public RightArrowClicked() {
    document.getElementById('LArrow').style.visibility='visible';
    if (Math.ceil(this.cnt) == this.allWeeklyTops.length - 1) {
      document.getElementById('rArrow').style.visibility = 'hidden';

    }
    if (this.cnt < this.allWeeklyTops.length - 1) {
     this.Unshiftedeles[this.LeftCounter++]= this.weeks.shift();
      this.weeks.push(this.allWeeklyTops[(Math.ceil(this.cnt++))]);
    }
  }
public LeftArrowClicked() {
  document.getElementById('rArrow').style.visibility='visible';
  if (this.LeftCounter==1) {
    document.getElementById('LArrow').style.visibility = 'hidden';

  }
  if(this.LeftCounter!=0){
    this.weeks.pop();
    this.weeks.unshift(this.Unshiftedeles[--this.LeftCounter]);
  }
}
}
