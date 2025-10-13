import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
   email: {
        type: String,
        required: [true, 'User email is requried'],
        unique: [true, 'Email should be unique'],
        match: [/[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/],
        minLength: [10, 'Email should be at least 10 characters long!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        match: [/^[a-zA-Z0-9]+$/],
        minLength: [6, 'Password should be at least 6 characters'], 
    }
});

userSchema.virtual('rePassword')
    .get(function() {
        return this._rePassword;
    })
    .set(function(value) {
        this._rePassword = value;
    });

userSchema.pre('validate', function() {
    if (this.isNew && this.password !== this.rePassword) {
        this.invalidate('rePassword', 'Password missmatch!');
    }
});
userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 13);
});

const User = model('User', userSchema);

export default User;