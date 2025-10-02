import { Router } from "express";

const authController = Router();

authController.get('/', (req, res) =>{
    res.send('it works');
})

export default authController