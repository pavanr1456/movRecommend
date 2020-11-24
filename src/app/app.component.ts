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
  username = 'admin';
  password = '';
  isLoggedIn = false;
  hide = true;

  ngOnInit() {
    this.getMovies();
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

  public getDefault(event) {
    event.target.src = `/assets/no_image_found.jpg`;
  }

  public login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.isLoggedIn = true;
    } else {
      alert('Incorrect credentials');
    }
  }

  public logout() {
    this.isLoggedIn = false;
  }

  /**
   * getMovies
   */
  public getMovies() {

    this.movies = [
      {
        id: '23199746',
        genre: ['Horror'],
        name: 'The Crypt',
        recommendations: [
          {
            id: '1069944',
            names: 'Tales from the Crypt',
            genre: "['Thriller', 'Horror', 'Supernatural']",
          },
          {
            id: '10887942',
            names: 'Dead Tone',
            genre: "['Horror', 'Slasher', 'Teen']",
          },
          {
            id: '23576946',
            names: 'The Collector',
            genre:
              "['Crime Fiction', 'Thriller', 'Horror', 'Slasher', 'Suspense']",
          },
          {
            id: '17645321',
            names: 'The Entrance',
            genre: "['Thriller', 'Crime Thriller', 'Horror', 'Supernatural']",
          },
          {
            id: '448181',
            names: 'Decoys',
            genre:
              "['Thriller', 'Alien Film', 'Science Fiction', 'Horror', 'Horror Comedy']",
          },
          {
            id: '8414382',
            names: 'Fear of Clowns',
            genre: "['Horror', 'Slasher']",
          },
          {
            id: '7153190',
            names: 'Puppet Master II',
            genre: "['Cult', 'Horror']",
          },
          {
            id: '2610454',
            names: 'Zombies',
            genre: "['Zombie Film', 'Horror', 'Supernatural']",
          },
          {
            id: '5662308',
            names: 'Kill Me Later',
            genre:
              "['Thriller', 'Crime', 'Drama', 'Suspense', 'Romance Film', 'Action']",
          },
          {
            id: '1690432',
            names: 'Jeepers Creepers',
            genre:
              "['Monster movie', 'Horror', 'Road-Horror', 'Supernatural', 'Cult', 'Mystery', 'Teen']",
          },
        ],
      },
      {
        id: '6684682',
        genre: [
          'Costume drama',
          'Period piece',
          'Costume Adventure',
          'Adventure',
        ],
        name: 'The Black Shield of Falworth',
        recommendations: [
          {
            id: '2507217',
            names: 'Chimes at Midnight',
            genre:
              "['Drama', 'Costume drama', 'Tragicomedy', 'Comedy', 'War film']",
          },
          {
            id: '62084',
            names: 'The Adventures of Robin Hood',
            genre:
              "['Swashbuckler films', 'Adventure', 'Costume drama', 'Action/Adventure', 'Drama', 'Romance Film', 'Action']",
          },
          {
            id: '14075290',
            names: 'Zany Adventures of Robin Hood',
            genre:
              "['Parody', 'Television movie', 'Costume drama', 'Comedy', 'Political cinema', 'Slapstick']",
          },
          {
            id: '4560',
            names: 'Braveheart',
            genre:
              "['Biography', 'Adventure', 'History', 'War film', 'Action/Adventure', 'Period piece', 'Drama', 'Costume drama', 'Action']",
          },
          {
            id: '25340505',
            names: 'Wolfshead: The Legend of Robin Hood',
            genre: "['Adventure']",
          },
          {
            id: '13713239',
            names: 'Robin Hood',
            genre:
              "['Swashbuckler films', 'Adventure', 'Action/Adventure', 'Period piece', 'Drama', 'Action']",
          },
          {
            id: '261402',
            names: 'Robin Hood: Prince of Thieves',
            genre:
              "['Swashbuckler films', 'Adventure', 'Costume drama', 'Costume Adventure', 'Action/Adventure', 'Period piece', 'Drama', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '483727',
            names: 'The Court Jester',
            genre:
              "['Parody', 'Adventure', 'Costume drama', 'Musical comedy', 'Action/Adventure', 'Musical', 'Satire', 'Adventure Comedy', 'Comedy', 'Drama', 'Family Film', 'Action', 'Slapstick']",
          },
          {
            id: '15856289',
            names: 'The Master of Ballantrae',
            genre:
              "['Swashbuckler films', 'Adventure', 'Epic', 'Action/Adventure', 'Drama', 'Action']",
          },
          {
            id: '1306774',
            names: 'Witchfinder General',
            genre:
              "['Thriller', 'History', 'Horror', 'Adventure', 'Costume drama', 'Film adaptation', 'Period piece', 'Drama', 'War film']",
          },
        ],
      },
      {
        id: '9175052',
        genre: ['Crime Fiction', 'Comedy film', 'Action', 'Romance Film'],
        name: 'Mr. Romeo',
        recommendations: [
          { id: '14538458', names: 'Gundaraj', genre: "['Action']" },
          {
            id: '9067968',
            names: 'Dayavan',
            genre: "['Action/Adventure', 'World cinema']",
          },
          {
            id: '10618415',
            names: 'Aadalat',
            genre: "['Action', 'Bollywood']",
          },
          { id: '2775046', names: 'Baaghi', genre: "['Romance Film']" },
          {
            id: '20891507',
            names: 'Geet',
            genre: "['Drama', 'World cinema']",
          },
          {
            id: '9034263',
            names: 'Chhote Sarkar',
            genre: "['Thriller', 'Crime Thriller', 'Drama']",
          },
          {
            id: '8774064',
            names: 'Deewaanapan',
            genre:
              "['Romantic drama', 'Romance Film', 'Drama', 'World cinema']",
          },
          {
            id: '5547391',
            names: 'Aakhree Raasta',
            genre: "['Action', 'Bollywood']",
          },
          {
            id: '11749807',
            names: 'Pagla Kahin Ka',
            genre: "['Romance Film']",
          },
          { id: '30212893', names: 'Bhishma', genre: "['Action']" },
        ],
      },
      {
        id: '28966924',
        genre: ['Musical', 'Drama', 'Family Film'],
        name: 'Saptapadi telugu film',
        recommendations: [
          { id: '19998351', names: 'Shesha Drushti', genre: "['Drama']" },
          {
            id: '14432487',
            names: 'Charandas Chor',
            genre: "[\"Children's\", 'Art film']",
          },
          {
            id: '30086970',
            names: 'Riding the Stallion of a Dream',
            genre: "['Drama']",
          },
          { id: '3593930', names: 'Thanmathra', genre: "['Drama']" },
          { id: '21041655', names: 'Aalayamani', genre: "['Drama']" },
          {
            id: '5170742',
            names: 'Satyakam',
            genre: "['Family Film', 'Drama']",
          },
          {
            id: '19984296',
            names: '...and they dared to dream',
            genre: "['Mystery', 'Fantasy', 'Drama']",
          },
          { id: '27175946', names: 'Shaapa', genre: "['Drama']" },
          {
            id: '33269968',
            names: 'Thambi Vettothi Sundaram',
            genre: "['Drama']",
          },
          {
            id: '2772247',
            names: 'Chinthavishtayaya Shyamala',
            genre: "['Black comedy', 'Malayalam Cinema']",
          },
        ],
      },
      {
        id: '3932174',
        genre: ['Short Film', 'Family Film', 'Comedy', 'Animation'],
        name: 'Wackiki Wabbit',
        recommendations: [
          {
            id: '6051512',
            names: 'A Feather in His Hare',
            genre: "['Short Film', 'Family Film', 'Animation']",
          },
          {
            id: '6650769',
            names: 'Buccaneer Bunny',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Animation']",
          },
          {
            id: '13331336',
            names: 'Wagon Heels',
            genre:
              "['Short Film', 'Family Film', 'Western', 'Comedy film', 'Animation']",
          },
          {
            id: '3894895',
            names: 'Gorilla My Dreams',
            genre: "['Short Film', 'Comedy']",
          },
          {
            id: '8407902',
            names: 'Devil May Hare',
            genre: "['Short Film', 'Family Film', 'Animation']",
          },
          {
            id: '3160077',
            names: 'Hair-Raising Hare',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Animation']",
          },
          {
            id: '7260653',
            names: 'The Wacky Wabbit',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Animation']",
          },
          {
            id: '9851612',
            names: 'His Mouse Friday',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Animation']",
          },
          {
            id: '17789616',
            names: 'Jungle Jitters',
            genre: "['Jungle Film', 'Comedy']",
          },
          {
            id: '2851505',
            names: 'Hare Trigger',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Animation']",
          },
        ],
      },
      {
        id: '917524',
        genre: [
          'Erotic Drama',
          'Erotica',
          'World cinema',
          'Drama',
          'Romantic drama',
          'Romance Film',
        ],
        name: 'I Am Curious (Yellow)',
        recommendations: [
          {
            id: '9505256',
            names: 'A Lucky Day',
            genre: "['Drama', 'Indie', 'World cinema']",
          },
          {
            id: '1198987',
            names: 'Lost Embrace',
            genre:
              "['Ensemble Film', 'Drama', 'Indie', 'World cinema', 'Comedy']",
          },
          {
            id: '2209027',
            names: 'Betty Blue',
            genre: "['Romance Film', 'Drama']",
          },
          {
            id: '4289049',
            names: 'The Flower of My Secret',
            genre:
              "['Romantic drama', 'Romance Film', 'Drama', 'World cinema']",
          },
          {
            id: '9175052',
            names: 'Mr. Romeo',
            genre: "['Crime Fiction', 'Comedy film', 'Action', 'Romance Film']",
          },
          {
            id: '5898351',
            names: 'La Cérémonie',
            genre:
              "['Thriller', 'Crime Thriller', 'Drama', 'World cinema', 'Crime Drama']",
          },
          {
            id: '1190115',
            names: 'Imagining Argentina',
            genre:
              "['Thriller', 'World cinema', 'Supernatural', 'Family Drama', 'Period piece', 'Drama', 'Film adaptation', 'Romantic drama', 'Political drama']",
          },
          {
            id: '5600552',
            names: 'Valentín',
            genre:
              "['Indie', 'World cinema', 'Drama', 'Comedy', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '24154924',
            names: 'The Girl Who Played with Fire',
            genre:
              "['Thriller', 'Crime Fiction', 'Detective fiction', 'Detective', 'World cinema', 'Mystery', 'Drama', 'Crime Thriller']",
          },
          {
            id: '11921473',
            names: 'XXY',
            genre:
              "['LGBT', 'World cinema', 'Gay', 'Gay Interest', 'Drama', 'Gay Themed', 'Coming of age']",
          },
        ],
      },
      {
        id: '32899092',
        genre: ['Drama'],
        name: 'The Policewoman',
        recommendations: [
          { id: '32899970', names: 'Haircut', genre: "['Drama']" },
          { id: '14023727', names: 'El Sur', genre: "['Drama']" },
          { id: '20948069', names: 'Along the Ridge', genre: "['Drama']" },
          {
            id: '2728573',
            names: 'Life is a long quiet river',
            genre:
              "['Satire', 'Comedy-drama', 'Domestic Comedy', 'Comedy of manners']",
          },
          { id: '26613802', names: 'Mommo the Bogeyman', genre: "['Drama']" },
          {
            id: '16614186',
            names: 'Ne čakaj na maj',
            genre: "['Romance Film']",
          },
          {
            id: '31470462',
            names: 'Pokkuveyil',
            genre: "['Family Film', 'Drama']",
          },
          {
            id: '28953446',
            names: 'Ayer me echaron del pueblo',
            genre: "['Drama']",
          },
          {
            id: '14222093',
            names: 'Postcards from Leningrad',
            genre: "['Drama']",
          },
          { id: '21720602', names: 'Distant Land', genre: "['Drama']" },
        ],
      },
      {
        id: '14942228',
        genre: [
          'Romantic comedy',
          'Musical',
          "Children's",
          'Comedy',
          'Romance Film',
          'Teen',
        ],
        name: 'Another Cinderella Story',
        recommendations: [
          { id: '23199746', names: 'The Crypt', genre: "['Horror']" },
          {
            id: '6684715',
            names: 'Pudhiya Geethai',
            genre:
              "['Romantic drama', 'Romance Film', 'Drama', 'World cinema']",
          },
          {
            id: '9175052',
            names: 'Mr. Romeo',
            genre: "['Crime Fiction', 'Comedy film', 'Action', 'Romance Film']",
          },
          {
            id: '28311597',
            names: 'Time of the Comet',
            genre:
              "['Black comedy', 'Period piece', 'Drama', 'Romantic drama']",
          },
          {
            id: '3932174',
            names: 'Wackiki Wabbit',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Animation']",
          },
          {
            id: '31981616',
            names: 'Hoodwink',
            genre: "['Crime Fiction', 'Romance Film', 'Drama']",
          },
          {
            id: '2621487',
            names: 'Dirty Duck',
            genre: "['Pornographic movie', 'Adult', 'Comedy', 'Animation']",
          },
          {
            id: '6684682',
            names: 'The Black Shield of Falworth',
            genre:
              "['Costume drama', 'Period piece', 'Costume Adventure', 'Adventure']",
          },
          {
            id: '28966924',
            names: 'Saptapadi telugu film',
            genre: "['Musical', 'Drama', 'Family Film']",
          },
          {
            id: '14942228',
            names: 'Another Cinderella Story',
            genre:
              "['Romantic comedy', 'Musical', \"Children's\", 'Comedy', 'Romance Film', 'Teen']",
          },
        ],
      },
      {
        id: '19267610',
        genre: ['Thriller', 'Crime Fiction', 'Drama', 'Caper story'],
        name: 'A Prize of Arms',
        recommendations: [
          {
            id: '2621487',
            names: 'Dirty Duck',
            genre: "['Pornographic movie', 'Adult', 'Comedy', 'Animation']",
          },
          {
            id: '28311597',
            names: 'Time of the Comet',
            genre:
              "['Black comedy', 'Period piece', 'Drama', 'Romantic drama']",
          },
          {
            id: '31981616',
            names: 'Hoodwink',
            genre: "['Crime Fiction', 'Romance Film', 'Drama']",
          },
          {
            id: '9175052',
            names: 'Mr. Romeo',
            genre: "['Crime Fiction', 'Comedy film', 'Action', 'Romance Film']",
          },
          {
            id: '917524',
            names: 'I Am Curious (Yellow)',
            genre:
              "['Erotic Drama', 'Erotica', 'World cinema', 'Drama', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '3932174',
            names: 'Wackiki Wabbit',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Animation']",
          },
          {
            id: '6684682',
            names: 'The Black Shield of Falworth',
            genre:
              "['Costume drama', 'Period piece', 'Costume Adventure', 'Adventure']",
          },
          {
            id: '14942228',
            names: 'Another Cinderella Story',
            genre:
              "['Romantic comedy', 'Musical', \"Children's\", 'Comedy', 'Romance Film', 'Teen']",
          },
          {
            id: '28966924',
            names: 'Saptapadi telugu film',
            genre: "['Musical', 'Drama', 'Family Film']",
          },
          {
            id: '19267610',
            names: 'A Prize of Arms',
            genre: "['Thriller', 'Crime Fiction', 'Drama', 'Caper story']",
          },
        ],
      },
      {
        id: '5242919',
        genre: ['Bollywood'],
        name: 'Dosti',
        recommendations: [
          {
            id: '10702360',
            names: 'Boy Friend',
            genre: "['Musical', 'World cinema', 'Bollywood', 'Comedy']",
          },
          { id: '4746656', names: 'Vedham Pudhithu', genre: "['Drama']" },
          {
            id: '5229759',
            names: 'The Man of the Story',
            genre:
              "['Japanese Movies', 'Historical Epic', 'Biography', 'Drama']",
          },
          {
            id: '11961005',
            names: 'Swami',
            genre: "['Drama', 'World cinema']",
          },
          { id: '10153657', names: 'Subarnarekha', genre: "['Drama']" },
          {
            id: '20903266',
            names: 'Bundal Baaz',
            genre:
              "['Romantic comedy', 'World cinema', 'Musical', 'Comedy', 'Romance Film', 'Bollywood']",
          },
          { id: '10134112', names: 'Yaaradi Nee Mohini', genre: "['Drama']" },
          {
            id: '11255555',
            names: 'Dil Apna Aur Preet Parai',
            genre: "['Musical', 'Drama', 'Bollywood', 'World cinema']",
          },
          {
            id: '427011',
            names: 'Chameli',
            genre:
              "['Art film', 'World cinema', 'Drama', 'Romantic drama', 'Romance Film', 'Bollywood']",
          },
          { id: '7463777', names: 'Nagarik', genre: "['Drama']" },
        ],
      },
      {
        id: '8388648',
        genre: ['Drama'],
        name: 'Nee Sneham',
        recommendations: [
          { id: '10791769', names: 'Moondru Mudichu', genre: "['Drama']" },
          {
            id: '20114060',
            names: 'Idhu Malai Nerathu Mayakkam',
            genre: "['Romance Film', 'Drama']",
          },
          { id: '25451763', names: 'Dhairyavanthudu', genre: "['Drama']" },
          { id: '5654699', names: 'Simhadri', genre: "['Action', 'Drama']" },
          {
            id: '5352769',
            names: 'Chellamae',
            genre: "['Romance Film', 'Tamil cinema']",
          },
          {
            id: '5374593',
            names: 'Tumsa Nahim Dekha',
            genre:
              "['Romantic drama', 'Romance Film', 'Drama', 'World cinema']",
          },
          {
            id: '3900596',
            names: 'Lamhe',
            genre:
              "['World cinema', 'Musical', 'Drama', 'Romantic drama', 'Romance Film', 'Bollywood']",
          },
          {
            id: '11237656',
            names: 'Kaajal',
            genre:
              "['World cinema', 'Musical', 'Drama', 'Romantic drama', 'Romance Film', 'Bollywood']",
          },
          {
            id: '8077348',
            names: 'Ishq Hai Tumse',
            genre: "['Romance Film']",
          },
          {
            id: '26708093',
            names: 'Pillaiyar Theru Kadaisi Veedu',
            genre: "['Romance Film', 'Drama', 'Comedy']",
          },
        ],
      },
      {
        id: '6684715',
        genre: ['Romantic drama', 'Romance Film', 'Drama', 'World cinema'],
        name: 'Pudhiya Geethai',
        recommendations: [
          { id: '21543965', names: 'Ivan', genre: "['Action']" },
          { id: '27175946', names: 'Shaapa', genre: "['Drama']" },
          {
            id: '33269863',
            names: 'Karungali',
            genre: "['Romance Film', 'Drama']",
          },
          { id: '21041655', names: 'Aalayamani', genre: "['Drama']" },
          {
            id: '26393161',
            names: 'Dam 999',
            genre:
              "['Thriller', 'World cinema', 'Action/Adventure', 'Drama', 'Disaster', 'Action']",
          },
          {
            id: '31129842',
            names: 'Shor in the City',
            genre: "['Crime Fiction', 'Drama']",
          },
          {
            id: '9790786',
            names: 'The Last Lear',
            genre: "['Drama', 'Art film', 'World cinema']",
          },
          {
            id: '17175786',
            names: 'Kaalpurush',
            genre: "['Musical', 'Drama', 'Bollywood', 'World cinema']",
          },
          {
            id: '11236647',
            names: 'Jaane Tu Ya Jaane Na',
            genre:
              "['Romantic comedy', 'World cinema', 'Musical', 'Drama', 'Comedy', 'Romantic drama', 'Romance Film', 'Bollywood']",
          },
          {
            id: '8782644',
            names: 'Bhalo Theko',
            genre: "['Romance Film', 'Drama']",
          },
        ],
      },
      {
        id: '12058668',
        genre: ['Romance Film', 'Comedy-drama', 'Comedy'],
        name: 'Je Vous Trouve Très Beau',
        recommendations: [
          {
            id: '16029585',
            names: 'The Tit and the Moon',
            genre:
              "['Erotica', 'World cinema', 'Childhood Drama', 'Drama', 'Comedy', 'Coming of age']",
          },
          { id: '24747725', names: 'My Friend Max', genre: "['Drama']" },
          {
            id: '25807540',
            names: 'The Shooting of Dan McGrew',
            genre: "['Silent film']",
          },
          {
            id: '18874821',
            names: 'Little Lili',
            genre: "['Drama', 'World cinema']",
          },
          {
            id: '5454380',
            names: 'The Thrill of It All',
            genre:
              "['Romantic comedy', 'Romance Film', 'Screwball comedy', 'Comedy']",
          },
          {
            id: '9757430',
            names: 'Sol de otoño',
            genre:
              "['Indie', 'World cinema', 'Drama', 'Comedy', 'Romantic drama', 'Romance Film', 'Religious Film']",
          },
          {
            id: '9636080',
            names: 'Una noche con Sabrina Love',
            genre:
              "['Romantic comedy', 'World cinema', 'Road movie', 'Comedy-drama', 'Coming of age', 'Comedy', 'Drama', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '434816',
            names: 'The Seduction of Mimi',
            genre:
              "['Sex comedy', 'World cinema', 'Comedy-drama', 'Political satire', 'Satire', 'Comedy', 'Political cinema', 'Black comedy']",
          },
          {
            id: '27722004',
            names: 'La Nuit fantastique',
            genre: "['Fantasy']",
          },
          {
            id: '7376595',
            names: 'Durval discos',
            genre:
              "['Thriller', 'World cinema', 'Comedy-drama', 'Musical', 'Drama', 'Comedy', 'Black comedy']",
          },
        ],
      },
      {
        id: '28311597',
        genre: ['Black comedy', 'Period piece', 'Drama', 'Romantic drama'],
        name: 'Time of the Comet',
        recommendations: [
          {
            id: '17188553',
            names: 'Missing Without Leave',
            genre: "['Drama', 'Film noir', 'Crime Drama']",
          },
          {
            id: '25781195',
            names: 'Son Osmanlı Yandım Ali',
            genre: "['Action']",
          },
          {
            id: '16877825',
            names: "L'As Des As",
            genre: "['Adventure Comedy', 'Adventure', 'Comedy']",
          },
          {
            id: '14632518',
            names: 'The Little American',
            genre:
              "['Silent film', 'Drama', 'Indie', 'Black-and-white', 'War film']",
          },
          {
            id: '17366149',
            names: 'St. George Shoots the Dragon',
            genre: "['History', 'Drama', 'World cinema', 'War film']",
          },
          {
            id: '8921046',
            names: 'The Congress Dances',
            genre: "['Musical', 'Comedy', 'Black-and-white']",
          },
          { id: '19578367', names: 'Brainwashed', genre: "['Drama']" },
          {
            id: '32880476',
            names: 'The Martyrdom of Nurse Cavell',
            genre: "['Thriller', 'Short Film', 'Drama']",
          },
          {
            id: '33298020',
            names: 'Skaz pro to, kak tsar Pyotr arapa zhenil',
            genre: "['Romance Film', 'Musical']",
          },
          {
            id: '22522592',
            names: 'Murnau the Vampire',
            genre: "['Short Film', 'Animation']",
          },
        ],
      },
      {
        id: '10616876',
        genre: ['Romance Film', 'Drama'],
        name: 'Aap Ki Kasam',
        recommendations: [
          {
            id: '25593267',
            names: 'Janwar',
            genre: "['Musical', 'Romance Film']",
          },
          { id: '16490829', names: 'Vallamai Tharayo', genre: "['Drama']" },
          {
            id: '3605117',
            names: 'Aradhana',
            genre: "['Musical', 'Drama', 'World cinema', 'Bollywood']",
          },
          {
            id: '2279228',
            names: 'Bewafaa',
            genre:
              "['Romantic drama', 'Romance Film', 'Drama', 'World cinema']",
          },
          {
            id: '10725408',
            names: 'Biraj Bahu',
            genre: "['Bollywood', 'Black-and-white']",
          },
          {
            id: '1326091',
            names: 'Kuch Naa Kaho',
            genre:
              "['Romantic comedy', 'World cinema', 'Drama', 'Comedy', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '2782511',
            names: 'Aitbaar',
            genre: "['Thriller', 'Action']",
          },
          {
            id: '11337163',
            names: 'Sasural',
            genre:
              "['World cinema', 'Musical', 'Drama', 'Romantic drama', 'Romance Film', 'Bollywood']",
          },
          {
            id: '10639481',
            names: 'Ishq Par Zor Nahin',
            genre: "['Romance Film']",
          },
          {
            id: '36157703',
            names: 'Tohfa',
            genre: "['Family Film', 'Action', 'Drama', 'Romance Film']",
          },
        ],
      },
      {
        id: '2621487',
        genre: ['Pornographic movie', 'Adult', 'Comedy', 'Animation'],
        name: 'Dirty Duck',
        recommendations: [
          {
            id: '1002717',
            names: 'Foul Play',
            genre:
              "['Albino bias', 'Thriller', 'Comedy film', 'Action/Adventure', 'Mystery', 'Comedy', 'Romance Film', 'Action', 'Romantic comedy']",
          },
          { id: '25367628', names: 'Girl of the Night', genre: "['Drama']" },
          {
            id: '2046735',
            names: 'Fatal Instinct',
            genre: "['Parody', 'Comedy']",
          },
          {
            id: '22805715',
            names: 'Passion Play',
            genre:
              "['Thriller', 'Indie', 'Fantasy', 'Drama', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '1842500',
            names: 'Spun',
            genre:
              "['Crime Fiction', 'Indie', 'Comedy-drama', 'Drama', 'Comedy', 'Black comedy']",
          },
          {
            id: '9979',
            names: 'Eyes Wide Shut',
            genre:
              "['Thriller', 'Erotic Drama', 'Erotica', 'Mystery', 'Surrealism', 'Psychological thriller', 'Erotic thriller', 'Marriage Drama', 'Drama', 'Romance Film']",
          },
          {
            id: '6006929',
            names: 'Cop',
            genre:
              "['Thriller', 'Mystery', 'Drama', 'Psychological thriller', 'Crime Thriller']",
          },
          {
            id: '1691989',
            names: 'The Howling',
            genre:
              "['Horror', 'Indie', 'Werewolf fiction', 'Creature Film', 'Cult', 'Drama', 'Film adaptation']",
          },
          {
            id: '23927080',
            names: 'Mr. Soft Touch',
            genre: "['Drama', 'Comedy-drama', 'Black-and-white', 'Film noir']",
          },
          { id: '967999', names: 'Eegah', genre: "['Horror', 'Indie']" },
        ],
      },
      {
        id: '31981616',
        genre: ['Crime Fiction', 'Romance Film', 'Drama'],
        name: 'Hoodwink',
        recommendations: [
          {
            id: '10430845',
            names: 'Almost an Angel',
            genre:
              "['Heaven-Can-Wait Fantasies', 'Fantasy Comedy', 'Fantasy', 'Comedy', 'Heavenly Comedy']",
          },
          {
            id: '28266550',
            names: 'Le Passe-muraille',
            genre: "['Fantasy Comedy', 'Fantasy', 'Comedy']",
          },
          {
            id: '905483',
            names: 'Chopper',
            genre: "['Crime Fiction', 'Biographical film', 'Drama', 'Comedy']",
          },
          {
            id: '27755114',
            names: 'B. Monkey',
            genre: "['Thriller', 'Crime Thriller', 'Heist']",
          },
          {
            id: '1688153',
            names: 'Tais-toi!',
            genre:
              "['Crime Fiction', 'Buddy film', 'Crime Comedy', 'Comedy', 'Chase Movie']",
          },
          {
            id: '145608',
            names: 'The Face Behind the Mask',
            genre: "['Drama', 'Black-and-white']",
          },
          {
            id: '30081969',
            names: 'Albert Nobbs',
            genre: "['LGBT', 'Period piece', 'Drama', 'Romance Film']",
          },
          {
            id: '214331',
            names: 'Morgan: A Suitable Case for Treatment',
            genre:
              "['Parody', 'Political cinema', 'Drama', 'Comedy', 'Black-and-white']",
          },
          {
            id: '28177482',
            names: "My Brother's Keeper",
            genre: "['Crime Fiction', 'Drama']",
          },
          {
            id: '4711743',
            names: 'The Devil and Max Devlin',
            genre:
              "['Heaven-Can-Wait Fantasies', 'Fantasy', 'Comedy', 'Family Film', 'Fantasy Comedy', 'Religious Film']",
          },
        ],
      },
      {
        id: '36306987',
        genre: ['Thriller'],
        name: 'The Reluctant Fundamentalist',
        recommendations: [
          {
            id: '24934813',
            names: 'Slackistan',
            genre: "['Drama', 'Indie']",
          },
          { id: '28990896', names: 'Mysteria', genre: "['Mystery']" },
          {
            id: '10916155',
            names: 'Civic Duty',
            genre:
              "['Thriller', 'Crime Thriller', 'Psychological thriller', 'Indie']",
          },
          { id: '23598840', names: 'Raftaar 24 x 7', genre: "['Thriller']" },
          {
            id: '22165686',
            names: 'The Unidentified',
            genre:
              "['Romantic comedy', 'Indie', 'Drama', 'Comedy', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '18987350',
            names: 'Greetings from the Shore',
            genre:
              "['Romantic comedy', 'Romantic drama', 'Romance Film', 'Drama', 'Comedy']",
          },
          {
            id: '29005690',
            names: 'Lupo',
            genre:
              "['Romantic comedy', 'Romantic drama', 'Romance Film', 'Drama', 'World cinema']",
          },
          {
            id: '18794321',
            names: 'Midnight Man',
            genre:
              "['Action Thrillers', 'Thriller', 'Action', 'Martial Arts Film', 'Indie']",
          },
          {
            id: '34983677',
            names: 'Togetherness Supreme',
            genre: "['Drama']",
          },
          {
            id: '10428696',
            names: 'The Deal',
            genre:
              "['Crime Fiction', 'Thriller', 'Gangster Film', 'Drama', 'Suspense', 'Political thriller', 'Crime Thriller', 'Political drama']",
          },
        ],
      },
      {
        id: '14811189',
        genre: ['Action', 'Detective'],
        name: 'Executive Protection',
        recommendations: [
          {
            id: '2560398',
            names: 'The Man on the Roof',
            genre: "['Thriller', 'Crime Fiction', 'Mystery']",
          },
          {
            id: '2839084',
            names: 'The Match King',
            genre:
              "['Biographical film', 'Drama', 'Black-and-white', 'Biopic [feature]']",
          },
          { id: '4614381', names: 'Cheese and Jam', genre: "['Comedy']" },
          {
            id: '24154924',
            names: 'The Girl Who Played with Fire',
            genre:
              "['Thriller', 'Crime Fiction', 'Detective fiction', 'Detective', 'World cinema', 'Mystery', 'Drama', 'Crime Thriller']",
          },
          {
            id: '12812600',
            names: 'Nazi Agent',
            genre: "['Action', 'Spy', 'Drama', 'Black-and-white', 'War film']",
          },
          {
            id: '8677111',
            names: 'In China They Eat Dogs',
            genre:
              "['LGBT', 'Crime Comedy', 'World cinema', 'Caper story', 'Comedy Thriller', 'Action/Adventure', 'Comedy', 'Action']",
          },
          { id: '31316923', names: 'Leif', genre: "['Comedy film']" },
          {
            id: '12193865',
            names: 'Radio tekee murron',
            genre: "['Crime Fiction', 'Comedy']",
          },
          {
            id: '767193',
            names: 'Woman in the Moon',
            genre:
              "['Science Fiction', 'Indie', 'World cinema', 'Silent film', 'Black-and-white', 'Drama', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '30736519',
            names: 'Bang Boom Bang',
            genre: "['Crime Fiction', 'Comedy film', 'Action']",
          },
        ],
      },
      {
        id: '27525185',
        genre: ['Crime Fiction', 'Action', 'Adventure'],
        name: 'Innocent Bystanders',
        recommendations: [
          {
            id: '23531909',
            names: 'Company Business',
            genre: "['Thriller', 'Action/Adventure', 'Action', 'Comedy']",
          },
          {
            id: '22816098',
            names: 'Double Identity',
            genre:
              "['Thriller', 'Crime Thriller', 'Short Film', 'Action', 'Action/Adventure']",
          },
          {
            id: '2020117',
            names: 'Wild Geese',
            genre: "['Action/Adventure', 'Thriller', 'Action', 'War film']",
          },
          {
            id: '6941316',
            names: 'Sleeping Car to Trieste',
            genre: "['Mystery', 'Action', 'Black-and-white', 'Spy']",
          },
          {
            id: '3612689',
            names: 'World for Ransom',
            genre:
              "['Thriller', 'Action Thrillers', 'Black-and-white', 'Action/Adventure', 'Drama', 'Crime Fiction', 'Crime Thriller', 'Action', 'Film noir', 'Spy']",
          },
          {
            id: '3331330',
            names: 'Evenfall',
            genre: "['Short Film', 'Action', 'Adventure']",
          },
          {
            id: '18521491',
            names: 'Midnight in Saint Petersburg',
            genre: "['Thriller', 'Spy']",
          },
          {
            id: '17151705',
            names: 'The Evil That Men Do',
            genre:
              "['Thriller', 'Action Thrillers', 'Adventure', 'Action/Adventure', 'Crime Thriller', 'Action']",
          },
          {
            id: '4232773',
            names: 'The Mechanik',
            genre: "['Thriller', 'Action/Adventure', 'Action', 'Drama']",
          },
          {
            id: '6499171',
            names: 'Down Among the Z Men',
            genre: "['Comedy']",
          },
        ],
      },
      {
        id: '19398722',
        genre: ['Short Film', 'Family Film', 'Comedy', 'Black-and-white'],
        name: 'Mike Fright',
        recommendations: [
          {
            id: '14573459',
            names: 'Gents Without Cents',
            genre: "['Short Film', 'Comedy', 'Black-and-white', 'Slapstick']",
          },
          {
            id: '1604902',
            names: 'Bigger Than the Sky',
            genre:
              "['Romantic comedy', 'Comedy-drama', 'Drama', 'Comedy', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '19400758',
            names: 'Divot Diggers',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Black-and-white']",
          },
          {
            id: '19828661',
            names: 'Radio Bugs',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Black-and-white']",
          },
          {
            id: '19400692',
            names: 'Our Gang Follies of 1936',
            genre:
              "['Short Film', 'Musical', 'Family Film', 'Comedy', 'Black-and-white']",
          },
          {
            id: '929472',
            names: 'Race for Your Life, Charlie Brown',
            genre: '["Children\'s", "Children\'s/Family"]',
          },
          {
            id: '19800473',
            names: 'Melodies Old and New',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Black-and-white']",
          },
          {
            id: '19408575',
            names: 'Arbor Day',
            genre: "['Short Film', 'Family Film', 'Comedy', 'Black-and-white']",
          },
          {
            id: '13701844',
            names: 'Micro-Phonies',
            genre: "['Short Film', 'Comedy', 'Black-and-white', 'Slapstick']",
          },
          {
            id: '15440115',
            names: 'Our Gang Follies of 1938',
            genre:
              "[\"Children's/Family\", 'Black-and-white', 'Short Film', 'Musical', 'Comedy', 'Family Film']",
          },
        ],
      },
      {
        id: '12189765',
        genre: [
          "Children's/Family",
          'Family Drama',
          'Childhood Drama',
          "Children's",
          'Drama',
          'Family Film',
        ],
        name: 'Saint Monica',
        recommendations: [
          {
            id: '19849373',
            names: 'Baby Sister',
            genre: "['Romance Film', 'Melodrama', 'Drama']",
          },
          {
            id: '710906',
            names: 'My Girl 2',
            genre:
              "['Family Drama', 'Comedy-drama', 'Coming of age', 'Comedy', 'Drama', 'Romance Film', 'Family Film', 'Teen']",
          },
          {
            id: '737801',
            names: 'Welcome Home, Roxy Carmichael',
            genre: "['Drama', 'Satire', 'Coming of age', 'Indie', 'Comedy']",
          },
          {
            id: '7160018',
            names: 'Life Before Her Eyes',
            genre:
              "['Thriller', 'Time travel', 'Drama', 'Indie', 'Film adaptation']",
          },
          {
            id: '177740',
            names: 'A Patch of Blue',
            genre:
              "['Romantic drama', 'Romance Film', 'Drama', 'Black-and-white', 'Film adaptation']",
          },
          {
            id: '1962192',
            names: 'Poetic Justice',
            genre: "['Romantic drama', 'Romance Film', 'Drama', 'Road movie']",
          },
          { id: '24225279', names: 'Sing', genre: "['Drama', 'Teen']" },
          {
            id: '25548532',
            names: 'Moonlight and Mistletoe',
            genre:
              "['Family Film', 'Family Drama', 'Drama', 'Television movie']",
          },
          {
            id: '11258828',
            names: 'On the Edge of Innocence',
            genre: "['Drama']",
          },
          {
            id: '10133100',
            names: 'College Road Trip',
            genre:
              "['Road movie', \"Children's\", 'Coming of age', 'Comedy', 'Drama', 'Family Film', 'Domestic Comedy', 'Teen']",
          },
        ],
      },
      {
        id: '12451919',
        genre: ['Tragedy', 'Drama'],
        name: 'Scent of Love',
        recommendations: [
          {
            id: '3776666',
            names: 'Bungee Jumping of Their Own',
            genre: "['Romance Film', 'Drama']",
          },
          {
            id: '33699244',
            names: 'All About My Wife',
            genre: "['Romance Film', 'Comedy film']",
          },
          {
            id: '20524492',
            names: 'No Regret',
            genre:
              "['LGBT', 'World cinema', 'Gay', 'Gay Interest', 'Drama', 'Gay Themed', 'Romantic drama', 'Romance Film']",
          },
          {
            id: '34141695',
            names: 'Introduction of Architecture',
            genre: "['Romance Film']",
          },
          {
            id: '12054477',
            names: 'You Are My Sunshine',
            genre:
              "['Comedy-drama', 'Romance Film', 'Drama', 'Romantic drama']",
          },
          {
            id: '33022747',
            names: 'You Pet',
            genre: "['Romance Film', 'Comedy']",
          },
          {
            id: '3225410',
            names: 'Jungdok',
            genre: "['Thriller', 'Mystery', 'Romance Film', 'Drama']",
          },
          {
            id: '20649332',
            names: 'Art Museum by the Zoo',
            genre: "['Romantic comedy']",
          },
          {
            id: '33049597',
            names: 'My Dear Desperado',
            genre: "['Comedy film', 'Drama', 'Romance Film']",
          },
          {
            id: '2091919',
            names: 'A Moment to Remember',
            genre: "['Romance Film', 'Drama']",
          },
        ],
      },
      {
        id: '13893715',
        genre: ['LGBT', 'Musical', 'Drama', 'Indie'],
        name: 'Prey for Rock & Roll',
        recommendations: [
          {
            id: '3053795',
            names: 'The Suburbans',
            genre:
              "['Parody', 'Ensemble Film', 'Drama', 'Comedy-drama', 'Comedy']",
          },
          {
            id: '22939533',
            names: 'Naked Fame',
            genre: "['LGBT', 'Music', 'Biography', 'Film', 'Documentary']",
          },
          {
            id: '31290638',
            names: 'Slaves to the Underground',
            genre: "['Romance Film', 'Musical', 'Drama', 'Comedy']",
          },
          {
            id: '8554522',
            names: 'Mi Vida Loca',
            genre: "['Crime Fiction', 'Drama', 'Indie']",
          },
          {
            id: '18683533',
            names: "The Perfect Age of Rock 'n' Roll",
            genre: "['Music', 'Drama', 'Musical Drama', 'Road movie']",
          },
          {
            id: '22892307',
            names: 'Elektra Luxx',
            genre: "['Action', 'Comedy', 'Indie']",
          },
          {
            id: '11250759',
            names: 'Mama, I Want to Sing!',
            genre: "['Musical', 'Drama']",
          },
          {
            id: '2037403',
            names: 'Light of Day',
            genre:
              "['Musical', 'Family Drama', 'Drama', 'Musical Drama', 'Indie']",
          },
          { id: '27694453', names: 'Chantal', genre: "['Drama']" },
          {
            id: '2967406',
            names: 'Shag',
            genre:
              "['Romantic comedy', 'Indie', 'Period piece', 'Coming of age', 'Comedy', 'Drama', 'Romantic drama', 'Romance Film', 'Teen']",
          },
        ],
      },
      {
        id: '6422613',
        genre: ['Melodrama', 'Drama'],
        name: 'Chained for Life',
        recommendations: [
          {
            id: '2294860',
            names: 'The Fortune',
            genre:
              "['Screwball comedy', 'Crime Comedy', 'Comedy', 'Slapstick']",
          },
          {
            id: '14320073',
            names: 'That Certain Woman',
            genre:
              "['Romantic drama', 'Romance Film', 'Melodrama', 'Drama', 'Black-and-white']",
          },
          {
            id: '61507',
            names: 'Libeled Lady',
            genre: "['Screwball comedy', 'Comedy', 'Black-and-white']",
          },
          {
            id: '6759112',
            names: 'Rock-A-Bye Baby',
            genre: "['Musical', 'Comedy']",
          },
          {
            id: '11635128',
            names: 'The Ice Follies of 1939',
            genre: "['Musical', 'Drama', 'Black-and-white']",
          },
          {
            id: '36353890',
            names: "The I Don't Care Girl",
            genre: "['Musical', 'Biographical film']",
          },
          {
            id: '1591979',
            names: 'Inside Daisy Clover',
            genre: "['Period piece', 'Drama']",
          },
          {
            id: '4110259',
            names: "The Night They Raided Minsky's",
            genre: "['Comedy']",
          },
          {
            id: '9149984',
            names: 'Bathing Beauty',
            genre: "['Romantic comedy', 'Musical', 'Comedy', 'Musical comedy']",
          },
          {
            id: '14624892',
            names: 'The Purchase Price',
            genre:
              "['Drama', 'Pre-Code', 'Comedy-drama', 'Black-and-white', 'Romantic drama']",
          },
        ],
      },
      {
        id: '111',
        genre: ['Horror'],
        name: 'The Unknown',
        recommendations: [],
      }
    ];
  }
}
