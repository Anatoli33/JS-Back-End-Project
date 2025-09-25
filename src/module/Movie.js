const movies =  [
  {
    title: "Inception",
    category: "Movie",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    year: 2010,
    imageUrl: "https://m.media-amazon.com/images/I/51oDk9i8l0L._AC_.jpg",
    rating: 8.8,
    description: "A skilled thief enters the dreams of others to steal secrets, but faces his biggest challenge when asked to plant an idea instead.",
    casts: []
  },
  {
    title: "The Godfather",
    category: "Movie",
    genre: "Crime",
    director: "Francis Ford Coppola",
    year: 1972,
    imageUrl: "https://m.media-amazon.com/images/I/71xZ7U1EJ1L._AC_SY679_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    rating: 8.6,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    casts: []
  }
]

export default class Movie{
    static find(){
        return movies.slice();
    }
}