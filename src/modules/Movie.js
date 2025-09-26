import {v4 as uuid} from 'uuid';

const movies = [
  {
    _id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Home Alone",
    category: "Movie",
    genre: "Comedy",
    director: "Chris Columbus",
    year: "1990",
    imageUrl: "https://image.tmdb.org/t/p/w500/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
    rating: 7.7,
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  },
  {
    _id: "550e8400-e29b-41d4-a716-446655440000",
    title: "The Godfather",
    category: "Movie",
    genre: "Crime",
    director: "Francis Ford Coppola",
    year: "1972",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 9.2,
    description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son."
  },
  {
    _id: "123e4567-e89b-12d3-a456-426614174000",
    title: "Interstellar",
    category: "Movie",
    genre: "Adventure",
    director: "Christopher Nolan",
    year: "2014",
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  }
];

export default class Movie {
  constructor(data) {
    Object.assign(this, data); 
    this._id = uuid();
  }

  static find(filter = {}) {
    let result = movies.slice();

    if (filter._id) {
      result = movies.filter(movie => movie._id === filter._id);
    }

    if(filter.title){
      // result = 
    }
    
    if(filter.genre){}

    if(filter.year){
      result = movies.filter(movie => movie.year === filter.year);
    }

    return result;
  }

  static findOne(filter = {}) {
    let result = movies[0];

    if (filter._id) {
      return movies.find(movie => movie._id === filter._id);
    }
    return result;
  }

  save() {
    movies.push(this); 

    return this;      
  }
}