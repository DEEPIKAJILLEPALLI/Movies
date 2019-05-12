import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
@Input() movie:Movie;
public secure_base_url: string="https://image.tmdb.org/t/p/original";
Posterfullpath;
  constructor() { }

  ngOnInit() {
    this.Posterfullpath=this.secure_base_url+this.movie.poster_path;
  }

}