import express from "express"
import handlebars from "express-handlebars";
import mongoose from "mongoose";

import routes from "./routes.js";
import cookieParser from "cookie-parser";
import { authMiddleware } from "./middlewares/authMid.js";


const app = express();
const port = 3000;

// Setup Database
const url = 'mongodb://localhost:27017';

try {
    await mongoose.connect(url, {
    dbName: 'movie-magic'
    });

    console.log('Successfully connected!');
} catch (error) {
    console.error('Cannot connect to DB,', error.message);
}

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup static middleware
app.use(express.static('src/public'));

app.use(express.urlencoded());

app.use(cookieParser());

app.use(authMiddleware);

app.use(routes);

app.listen(port, () => console.log(`Express running on port: ${port}...`));