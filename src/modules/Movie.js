const movies = [

  {
    title: "Home Alone",
    category: "Movie",
    genre: "Comedy",
    director: "Chris Columbus",
    year: 1990,
    imageUrl: "https://image.tmdb.org/t/p/w500/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
    rating: 7.7,
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
    casts: []
  },
  {
    title: "The Godfather",
    category: "Movie",
    genre: "Crime",
    director: "Francis Ford Coppola",
    year: 1972,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 9.2,
    description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    casts: []
  },
  {
    title: "Interstellar",
    category: "Movie",
    genre: "Adventure",
    director: "Christopher Nolan",
    year: 2014,
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    casts: []
  }
]

export default class Movie {
  constructor(data) {
    Object.assign(this, data); 
  }

  static find() {
    return movies.slice(); 
  }

  save() {
    movies.push(this); 

    return this;      
  }
}