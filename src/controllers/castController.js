import { Router } from "express";

const castController = Router();

castController.get('/', (req, res) =>{
    res.end();
});

export default castController;