import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './Services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpProvider } from './providers/http.provider';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MovieService,HttpProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
