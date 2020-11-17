import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movRecommend';
  movies = [];
  selected = "";

  ngOnInit() {
    this.getMovies();
  }

  /**
   * getMovies
   */
  public getMovies() {
    this.movies.push({id: 1, name: 'Star Trek 1'});
    this.movies.push({id: 2, name: 'Star Trek 2'});
    this.movies.push({id: 3, name: 'Star Trek 3'});
    this.movies.push({id: 4, name: 'Star Trek 4'});
    this.movies.push({id: 5, name: 'Star Trek 5'});
  }

  /**
   * getSelectedMovie
   */
  public getSelectedMovie() {
    return this.movies.find(a => a.id === this.selected).name;
  }
}
