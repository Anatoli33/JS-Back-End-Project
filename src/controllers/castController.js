import { Router } from "express";
import castService from "../services/castService.js";
import { getErrorMessage } from './../utils/errorUtils.js';

const castController = Router();

castController.get('/create', (req, res) => {
    res.render('casts/create');
});

castController.post('/create', async (req, res) => {
    const castData = req.body;

    try {
        await castService.create(castData);
        res.redirect('/');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('casts/create', { error: errorMessage, cast: castData });
    }
});

export default castController;
