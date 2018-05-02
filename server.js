"use strict";

// Npm Packegaes
const express = require('express');

const PORT = process.env.PORT || 80;

// Server.
const app = express();

app.use(express.static('public'));


app.get('/', ((req, res) => {
    res.sendFile(__dirname + '/public/index.html')
}))

app.get('*', function (req, res) {
    res.redirect("/")
});

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});

