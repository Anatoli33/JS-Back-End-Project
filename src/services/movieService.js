import Movie from "../modules/movie.js";

export default{
    
async getAll(filter = {}) {  // default to {}
    const query = {};

    if (filter.genre) {
        query.genre = { $regex: filter.genre, $options: 'i' };
    }

    if (filter.year) {
        query.year = filter.year;
    }

    return Movie.find(query).lean();
}

, 
    getOne(movieId){
        // return Movie.findOne({id: movieId});
        return Movie.findById(movieId);
    },
    create(movieData){

        const movie = new Movie(movieData);
        
        return movie.save();
    }
}