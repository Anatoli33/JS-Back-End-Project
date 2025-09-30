import Movie from "../modules/movie.js";

export default{
    
    getAll(filter = {}) {
        let query = Movie.find();
        // const result = await Movie.find(filter).lean();
        // const resultObj = result.map(movie => movie.toObject());

        if (filter.title) {

            query = query.find({ title: { $regex: filter.title, $options: 'i' } });
        }

        if (filter.genre) {
            
            query = query.find({ genre: { $regex: new RegExp(`^${filter.genre}$`), $options: 'i' } })
        }

        if (filter.year) {
            // result = result.find({ year: filter.year })
            query = query.where('year').equals(filter.year);
        }

        return query;
    }, 
    getOne(movieId){
        // return Movie.findOne({id: movieId});
        return Movie.findById(movieId);
    },
    create(movieData){

        const movie = new Movie(movieData);
        
        return movie.save();
    },
    async attach(movieId, castId){
          return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    }
}