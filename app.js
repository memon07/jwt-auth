const express = require("express");
const jwt = require("jsonwebtoken");

const app =express();

app.get('/api', (req,res) => {
    res.json({
        message: 'App Get'
    });
});

app.listen(5000, () => console.log('listening on port ....'))