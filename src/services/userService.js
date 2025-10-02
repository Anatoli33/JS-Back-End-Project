import User from "../modules/User.js";
export default{
    register(userData){
        return User.create(userData);
    }
}