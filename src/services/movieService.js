import { create } from "express-handlebars";
import Movie from "../module/movie.js";


export default{
    getAll(){
    return Movie.find();
}, 
    create(movieData){
        console.log(movieData);
    }
}