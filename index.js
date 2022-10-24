const express = require("express");
const app = express();
const port = process.env.PORT || 5000;


const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('course API running');
});

app.listen(port, () => {
    console.log('Teachza courses server running', port)
})