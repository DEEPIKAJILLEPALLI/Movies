import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit, OnChanges {

  @Input() data;
  arrowvisibility='hidden';
  @Input() header;
  movies;
  weeks = [];
  count = 0;
  public secure_base_url: string = "https://image.tmdb.org/t/p/original";
  width;
  cnt;
  Unshiftedeles = [];
  LeftCounter = 0;

  constructor(private moviesService: MovieService) {
  }

  public ngOnInit() {
    this.width = screen.width;
    this.width /= 150;
    this.cnt = this.width - 2;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      console.log(this.data.results);
      this.movies = this.data.results;
      this.data.results.forEach(element => {
        this.pushData(element, this.width);
      });
    }
  }
  public pushData(element, count) {
    if (this.count < count - 2) {
      this.count++;
      this.weeks.push(element);
    }
  }
  public RightArrowClicked() {
    debugger;
    document.getElementById('LArrow').style.visibility = 'visible';
    if (Math.ceil(this.cnt) == this.movies.length - 1) {
      document.getElementById('rArrow').style.visibility = 'hidden';
    }
    if (this.cnt < this.movies.length - 1) {
      this.Unshiftedeles[this.LeftCounter++] = this.weeks.shift();
      this.weeks.push(this.movies[(Math.ceil(this.cnt++))]);
    }
  }
  public LeftArrowClicked() {
    debugger;
    document.getElementById('rArrow').style.visibility = 'visible';
    if (this.LeftCounter == 1) {
      //document.getElementById('LArrow').style.visibility = 'hidden';
      document.getElementById('LArrow').style.color='grey';

    }
    if (this.LeftCounter != 0) {
      this.weeks.pop();
      this.weeks.unshift(this.Unshiftedeles[--this.LeftCounter]);
    }
  }

}
