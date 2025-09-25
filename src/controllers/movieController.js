import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});
movieController.post('/create', (req, res) => {
    const movieData = req.body;

    const movie = movieService.create(movieData);

    console.log('Created movie:', movie.title);

});

export default movieController;