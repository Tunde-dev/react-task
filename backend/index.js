const express = require('express');
const app = express();
const port = 8080;
const movies = require('./data.json');
const cors = require('cors');

app.use(cors());

app.get('/movies', (req,res) => {
    res.json(movies);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});