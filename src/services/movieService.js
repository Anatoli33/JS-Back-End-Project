import Movie from "../modules/movie.js";

export default{
    
    async getAll(filter = {}) {
    const query = {};

    if (filter.title) {
        query.title = { $regex: filter.title, $options: 'i' };
    }

    if (filter.genre) {
        query.genre = { $regex: filter.genre, $options: 'i' };
    }

    if (filter.year) {
        query.year = Number(filter.year);
    }

    return await Movie.find(query).lean();
    },
 
    getOne(movieId){
        // return Movie.findOne({id: movieId});
        return Movie.findById(movieId).populate('casts');
    },
    create(movieData){

        const movie = new Movie(movieData);
        
        return movie.save();
    },
    async attach(movieId, castId){
          return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    }
}