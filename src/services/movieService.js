import Movie from "../modules/movie.js";

export default{
    
    getAll(){
    return Movie.find();
}, 
    create(movieData){
        console.log(movieData);

        const movie = new Movie(movieData);
        
        return movie.save();
    }
}