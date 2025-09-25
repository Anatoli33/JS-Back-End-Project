import Movie from "../modules/movie.js";

export default{
    
    getAll(){
    return Movie.find();
}, 
    getOne(movieId){
        return Movie.find({_id: movieId});
    },
    create(movieData){

        const movie = new Movie(movieData);
        
        return movie.save();
    }
}