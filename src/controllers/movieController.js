import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

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
        // const movieCasts = await castService.getAll({includes: movie.casts});

       
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
});


movieController.get('/:movieId/attach', async(req, res) =>{
    const movieId = req.params.movieId;
    
    const movie = await movieService.getOne(movieId);
    const casts = await castService.getAll();

    res.render('casts/attach', {movie, casts});
});


movieController.post('/:movieId/attach', async (req, res) =>{
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    
    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);
})


export default movieController;