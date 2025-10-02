import { Router } from "express";
import userService from "../services/userService.js";
import User from "../modules/User.js";

const authController = Router();

authController.get('/register', (req, res) =>{
    res.render('./auth/register');
});
authController.post('/register', async (req, res) =>{
    const userData = req.body;
    console.log(userData);

    await userService.register(userData);
    
    res.redirect('/');
});

export default authController