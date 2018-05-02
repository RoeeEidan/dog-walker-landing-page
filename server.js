"use strict";

// Npm Packegaes
const express = require('express');

const PORT = process.env.PORT || 8080;

// Server.
const app = express();

app.use(express.static('public'));

// Home page.
app.get('/', ((req, res) => {
    res.send('index.html')
}))

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});

