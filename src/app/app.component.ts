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

  constructor(){

  }
  public async ngOnInit(){
   
  }
}
