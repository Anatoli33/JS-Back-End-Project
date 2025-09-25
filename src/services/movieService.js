import Movie from "../module/movie.js";


export default{
    getAll(){
    return Movie.find();
}
}