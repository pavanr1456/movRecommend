import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movRecommend';
  movies = [];
  selected = '';
  currentRecommendations = [];
  carousalTotal = 0;

  ngOnInit() {
    this.getMovies();
  }

  /**
   * getMovies
   */
  public getMovies() {
    this.movies.push({
      movie_id: 1,
      movie_name: 'Star Trek 1',
      recommendations: [
        { movie_id: 2, movie_name: 'Star Trek 2', image_link: 'assets/2.JPG'},
        { movie_id: 3, movie_name: 'Star Trek 3', image_link: 'assets/3.JPG'},
        { movie_id: 4, movie_name: 'Star Trek 4', image_link: 'assets/4.JPG'},
        { movie_id: 4, movie_name: 'Star Trek 5', image_link: 'assets/4.JPG'},
        { movie_id: 4, movie_name: 'Star Trek 6', image_link: 'assets/4.JPG'},
        { movie_id: 2, movie_name: 'Star Trek 7', image_link: 'assets/2.JPG'},
        { movie_id: 3, movie_name: 'Star Trek 8', image_link: 'assets/3.JPG'},
        { movie_id: 4, movie_name: 'Star Trek 9', image_link: 'assets/4.JPG'},
        { movie_id: 4, movie_name: 'Star Trek 10', image_link: 'assets/4.JPG'},
        { movie_id: 4, movie_name: 'Star Trek 4', image_link: 'assets/4.JPG'},
      ],
    });
    this.movies.push({
      movie_id: 2,
      movie_name: 'Star Trek 2',
      recommendations: [],
    });
    this.movies.push({
      movie_id: 3,
      movie_name: 'Star Trek 3',
      recommendations: [],
    });
    this.movies.push({
      movie_id: 4,
      movie_name: 'Star Trek 4',
      recommendations: [],
    });
    this.movies.push({
      movie_id: 5,
      movie_name: 'Star Trek 5',
      recommendations: [],
    });
  }

  public getRecommendations() {
    console.log(`calculating recommendations for ${this.selected}`);
    this.currentRecommendations = this.movies.find(
      (a) => a.movie_id === this.selected
    ).recommendations;
    console.log(`found ${this.currentRecommendations.length} recommendations`);
    this.carousalTotal = this.currentRecommendations.length / 3;

  }
}
