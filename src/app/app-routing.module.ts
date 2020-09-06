import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MoviesearchComponent} from './moviesearch/moviesearch.component';
const routes: Routes = [
  { path: '', component: MoviesContainerComponent },
  { path: 'movie/:movieId/:type', component: MovieDetailsComponent },
  {path: 'search', component : MoviesearchComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
