import Cast from "../modules/Cast.js";

export default {
    create(castData) {
        return Cast.create(castData);
    },
    async getAll(filter = {}) {
        let query = {};

        if (filter.includes) {
            query._id = { $in: filter.includes };
        }

        return Cast.find(query).exec();
    }
};
