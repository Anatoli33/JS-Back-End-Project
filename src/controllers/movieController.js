import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMid.js";

const movieController = Router();

movieController.get('/create', isAuth, (req, res) => {
    res.render('movies/create');
});
movieController.post('/create', isAuth, (req, res) => {
    const movieData = req.body;
    const userId = req.user.id;

    movieService.create(movieData, userId);
    
    res.redirect("/");

});

movieController.get("/:movieId/details", async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const movie = await movieService.getOne(movieId);
       
        const isCreator = movie.creator && movie.creator.equals(req.user?.id);
       
        res.render("movies/details", { movie, isCreator });
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

movieController.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    try {
        await movieService.attach(movieId, castId);
        res.redirect(`/movies/${movieId}/details`);
    } catch (err) {
        console.error('Error attaching cast:', err);
        res.status(500).send('Failed to attach cast');
    }
});
movieController.get('/:movieId/delete', isAuth, async (req, res) => {
   const movieId = req.params.movieId;

   const movie = await movieService.getOne(movieId);

   if(!movie.creator?.equals(req.user.id)){
        return res.redirect('/');
   }

   await movieService.delete(movieId);

   res.redirect('/')
});
movieController.get('/:movieId/edit',  async (req, res) => {
   const movieId = req.params.movieId;

   const movie = await movieService.getOne(movieId);

   res.render('movies/edit', { movie });
});
movieController.post('/:movieId/edit', async (req, res) => {
    const movieId = req.params.movieId;
   const movieData = req.body;

   await movieService.edit(movieId, movieData);

   res.redirect(`/movies/${movieId}/details`);

});
export default movieController;