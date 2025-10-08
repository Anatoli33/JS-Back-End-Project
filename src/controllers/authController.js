import { Router } from "express";
import userService from "../services/authService.js";
import { isAuth, isGuest } from './../middlewares/authMid.js';

const authController = Router();

authController.get('/register',  isGuest, (req, res) =>{
    res.render('./auth/register');
});
authController.post('/register', async (req, res) =>{
    const userData = req.body;

    await userService.register(userData);
    
    res.redirect('/auth/login');
});
authController.get('/login',  isGuest, (req, res) =>{
    res.render('./auth/login');
});
authController.post('/login', async (req, res) =>{
    const { email, password} = req.body;

    const token = await userService.login(email, password);

    //attach token to cookie
    res.cookie('auth', token);
    
    res.redirect('/');
});
authController.get('/logout', isAuth, (req, res) =>{
    res.clearCookie('auth');
    res.redirect("/");
});

export default authController