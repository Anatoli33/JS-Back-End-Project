import express from "express"


const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.status(200);
res.send('Welcome to Express.js!');
})
app.listen(port, () => console.log(`Express running
on port: ${port}...`));