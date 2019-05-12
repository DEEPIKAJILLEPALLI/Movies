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

  slides = [
    {img: "../assets/images/1.jpg"},
    {img: "../assets/images/2.jpg"},
    {img: "../assets/images/3.jpg"},
    {img: "../assets/images/4.jpg"},
    {img: "../assets/images/5.jpg"},
    {img: "../assets/images/6.jpg"},
    {img: "../assets/images/7.jpg"},
    {img: "../assets/images/8.jpg"},
    {img: "../assets/images/9.jpg"},
    {img: "../assets/images/10.jpg"},
    {img: "../assets/images/11.jpg"},
    {img: "../assets/images/12.jpg"},
    {img:"../assets/images/nav-icon.png"}
  ];
 
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false
  };
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}
