import express from "express"
import handlebars from "express-handlebars";
import routes from "./routes.js";


const app = express();
const port = 3000;

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup static middleware
app.use(express.static('src/public'));
app.use(express.urlencoded());

app.use(routes);

app.listen(port, () => console.log(`Express running
on port: ${port}...`));