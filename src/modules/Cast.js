import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [5, 'Name is too short!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Name has some invalid characters!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        max: [120, 'Age cannot be more than 120!'],
        min: [1, 'Age cannot be less than 1'],
    },
    born: {
        type: String,
        required: [true, 'Born place is required!'],
        minLength: [10, 'Born place is too short!'],
        match: [/^[a-zA-Z0-9 ]+$/, 'Born place has some invalid characters!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Image link is invalid!'],
    }
});

const Cast = model('Cast', castSchema);

export default Cast;