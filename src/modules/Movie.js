import { Schema, model, Types  } from "mongoose";


const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title is too short!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Title has some invalid characters!'],
    },
     category: {
        type: String,
        enum: {
            values: ['tv-show', 'animation', 'movie', 'documentary', 'short-film'],
            message: 'Your category is invalid!'
        },
        required: [true, 'Category is required!'],
    },
    genre:  {
        type: String,
        required: [true, 'Genre is required!'],
        minLength: [5, 'Genre is too short!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Genre has some invalid characters!'],
    },
    director:  {
        type: String,
        required: [true, 'Director is required!'],
        minLength: [5, 'Director is too short!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Director has some invalid characters!'],
    },
    year:  {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1900, 'Year cannot be less than 1900'],
        max: [2024, 'Year cannot be greater than 2024'],
    },
    imageUrl:  {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Image link is invalid!'],
    },
    rating:  {
        type: Number,
        required: [true, 'Rating is required!'],
        min: [1, 'Rating cannot be less than 1'],
        max: [10, 'Rating cannot be more than 10'],
    },
    description:  {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [20, 'Description should be at least 20 characters!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Description has some invalid characters!'],
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
    creator: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;