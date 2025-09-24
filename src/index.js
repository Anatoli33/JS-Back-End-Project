import express from "express"
import handlebars from "express-handlebars";

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

app.get('/', (req, res) => {
res.render('home', {layout: false});
})
app.listen(port, () => console.log(`Express running
on port: ${port}...`));