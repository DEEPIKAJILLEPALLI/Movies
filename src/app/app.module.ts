import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './Services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpProvider } from './providers/http.provider';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    MovieCarouselComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [MovieService,HttpProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
