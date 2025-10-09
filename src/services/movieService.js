import Movie from "../modules/movie.js";

export default {

    async getAll(filter = {}) {
        const query = {};

        if (filter.title) {
            query.title = { $regex: filter.title, $options: 'i' };
        }

        if (filter.genre) {
            query.genre = { $regex: filter.genre, $options: 'i' };
        }

        if (filter.year && !isNaN(filter.year)) {
            query.year = Number(filter.year);
        }

        return Movie.find(query).lean();
    },

    getOne(movieId) {
        return Movie.findById(movieId).populate('casts').lean();
    },

    create(movieData, userId) {
        return Movie.create({
            ...movieData,
            creator: userId
        });
    },

    attach(movieId, castId) {
        return Movie.findByIdAndUpdate(
            movieId,
            { $push: { casts: castId } },
            { new: true }
        );
    },
    delete(movieId) {
        return Movie.findByIdAndDelete(movieId);
    },
edit(movieId, movieData) {
    return Movie.findByIdAndUpdate(movieId, movieData, { runValidators: true });
}

};
