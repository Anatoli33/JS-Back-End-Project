import Cast from "../modules/Cast.js"

export default{
    create(castData){
        return Cast.create(castData);
    },
    async getAll(filter = {}){
        let query = Cast.find();

        if(filter.includes){
            query = query.in('_id', filter.includes)
        }

        return query;
    }
}