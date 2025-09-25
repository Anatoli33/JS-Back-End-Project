import { Router } from "express";

const movieController = Router();

movieController.get('/movie/create', (req, res) => {
    res.send('Movie create');
});

export default movieController