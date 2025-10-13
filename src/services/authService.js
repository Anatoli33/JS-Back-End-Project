import User from "../modules/User.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'c4d8a1e2a7c6f48d94f1a3e1a3a5e7f2d1c8a9b7c4f6e3a5d7f9b2c4a8e1f3c9';

export default{
    async register(userData) {
    const exists = await User.exists({ email: userData.email });

    if (exists) {
        throw new Error('This user already exists!');
    }

    
    return User.create(userData);
    },
    async login(email, password){
        
        const user = await User.findOne({ email });
        
        if (!user){
            throw new Error('Invalid user or password!');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid){
            throw new Error('Invalid user or password!'); 
        }

        //create token

        const payload = {
            id: user.id,
            email: user.email
        };

        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '2h'});
        return token;
    }
}