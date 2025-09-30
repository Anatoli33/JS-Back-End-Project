import Cast from "../modules/Cast.js"

export default{
    create(castData){
        return Cast.create(castData);
    },
     getAll(){
        return Cast.find();
    }
}