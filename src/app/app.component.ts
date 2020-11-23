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
    // this.movies.push({
    //   movie_id: 23199746,
    //   movie_name: 'The Crypt',
    //   recommendations: [
    //     { movie_id: 2, movie_name: 'Star Trek 2', image_link: 'assets/2.JPG'},
    //     { movie_id: 3, movie_name: 'Star Trek 3', image_link: 'assets/3.JPG'},
    //     { movie_id: 4, movie_name: 'Star Trek 4', image_link: 'assets/4.JPG'},
    //     { movie_id: 4, movie_name: 'Star Trek 5', image_link: 'assets/4.JPG'},
    //     { movie_id: 4, movie_name: 'Star Trek 6', image_link: 'assets/4.JPG'},
    //     { movie_id: 2, movie_name: 'Star Trek 7', image_link: 'assets/2.JPG'},
    //     { movie_id: 3, movie_name: 'Star Trek 8', image_link: 'assets/3.JPG'},
    //     { movie_id: 4, movie_name: 'Star Trek 9', image_link: 'assets/4.JPG'},
    //     { movie_id: 4, movie_name: 'Star Trek 10',image_link: 'assets/4.JPG'},
    //     { movie_id: 4, movie_name: 'Star Trek 4', image_link: 'assets/4.JPG'},
    //   ],
    // });
    this.movies.push({
        id: '23199746',
        genre: ['Horror'],
        name: 'The Crypt',
        recommendations: [
          {
            id: '1069944',
            names: 'Tales from the Crypt',
            genre: '[\'Thriller\', \'Horror\', \'Supernatural\']'
          },
          {
            id: '10887942',
            names: 'Dead Tone',
            genre: '[\'Horror\', \'Slasher\', \'Teen\']'
          },
          {
            id: '23576946',
            names: 'The Collector',
            genre: '[\'Crime Fiction\', \'Thriller\', \'Horror\', \'Slasher\', \'Suspense\']'
          },
          {
            id: '17645321',
            names: 'The Entrance',
            genre: '[\'Thriller\', \'Crime Thriller\', \'Horror\', \'Supernatural\']'
          },
          {
            id: '448181',
            names: 'Decoys',
            genre: '[\'Thriller\', \'Alien Film\', \'Science Fiction\', \'Horror\', \'Horror Comedy\']'
          },
          {
            id: '8414382',
            names: 'Fear of Clowns',
            genre: '[\'Horror\', \'Slasher\']'
          },
          {
            id: '7153190',
            names: 'Puppet Master II',
            genre: '[\'Cult\', \'Horror\']'
          },
          {
            id: '2610454',
            names: 'Zombies',
            genre: '[\'Zombie Film\', \'Horror\', \'Supernatural\']'
          },
          {
            id: '5662308',
            names: 'Kill Me Later',
            genre: '[\'Thriller\', \'Crime\', \'Drama\', \'Suspense\', \'Romance Film\', \'Action\']'
          },
          {
            id: '1690432',
            names: 'Jeepers Creepers',
            genre: '[\'Monster movie\', \'Horror\', \'Road-Horror\', \'Supernatural\', \'Cult\', \'Mystery\', \'Teen\']'
          }
        ]
    });
    this.movies.push({
      id: '3932174',
      genre: ['Short Film', 'Family Film', 'Comedy', 'Animation'],
      name: 'Wackiki Wabbit',
      recommendations: [
        {
          id: '6051512',
          names: 'A Feather in His Hare',
          genre: '[\'Short Film\', \'Family Film\', \'Animation\']'
        },
        {
          id: '6650769',
          names: 'Buccaneer Bunny',
          genre: '[\'Short Film\', \'Family Film\', \'Comedy\', \'Animation\']'
        },
        {
          id: '13331336',
          names: 'Wagon Heels',
          genre: '[\'Short Film\', \'Family Film\', \'Western\', \'Comedy film\', \'Animation\']'
        },
        {
          id: '3894895',
          names: 'Gorilla My Dreams',
          genre: '[\'Short Film\', \'Comedy\']'
        },
        {
          id: '8407902',
          names: 'Devil May Hare',
          genre: '[\'Short Film\', \'Family Film\', \'Animation\']'
        },
        {
          id: '3160077',
          names: 'Hair-Raising Hare',
          genre: '[\'Short Film\', \'Family Film\', \'Comedy\', \'Animation\']'
        },
        {
          id: '7260653',
          names: 'The Wacky Wabbit',
          genre: '[\'Short Film\', \'Family Film\', \'Comedy\', \'Animation\']'
        },
        {
          id: '9851612',
          names: 'His Mouse Friday',
          genre: '[\'Short Film\', \'Family Film\', \'Comedy\', \'Animation\']'
        },
        {
          id: '17789616',
          names: 'Jungle Jitters',
          genre: '[\'Jungle Film\', \'Comedy\']'
        },
        {
          id: '2851505',
          names: 'Hare Trigger',
          genre: '[\'Short Film\', \'Family Film\', \'Comedy\', \'Animation\']'
        }
      ]
    });
    // this.movies.push({
    //   movie_id: 4,
    //   movie_name: 'Star Trek 4',
    //   recommendations: [],
    // });
    // this.movies.push({
    //   movie_id: 5,
    //   movie_name: 'Star Trek 5',
    //   recommendations: [],
    // });
  }

  public getRecommendations() {
    console.log(`calculating recommendations for ${this.selected}`);
    this.currentRecommendations = this.movies.find(
      (a) => a.id === this.selected
    ).recommendations;
    console.log(`found ${this.currentRecommendations.length} recommendations`);
    this.carousalTotal = this.currentRecommendations.length / 3;

  }

  public getLink(movie) {
    return `/assets/${movie.id}.jpg`;
  }
}
