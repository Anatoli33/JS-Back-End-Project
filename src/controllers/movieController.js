import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});
movieController.post('/create', (req, res) => {
    const movieData = req.body;

    movieService.create(movieData);
    
    res.redirect("/");

});

movieController.get("/:movieId/details", async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const movie = await movieService.getOne(movieId);

        res.render("details", { movie });
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong while loading movie details");
    }
});

movieController.get('/search', (req, res) =>{
    const filter = req.query;

    const movies = movieService.getAll(filter);

    res.render('search', { movies, filter });
})
movieController.get('/:movieId/attach', (req, res) =>{

    res.render('casts/attach');
})

export default movieController;