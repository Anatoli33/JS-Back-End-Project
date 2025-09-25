import { Router } from "express";

const movieController = Router();

movieController.get('/movie/create', (req, res) => {
    res.render('create');
});

export default movieController