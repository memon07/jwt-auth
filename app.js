const express = require("express");
const jwt = require("jsonwebtoken");

const app =express();

app.get('/api', (req,res) => {
    res.json({
        message: 'App Get'
    });
});

app.post('/api/posts',verifyAuth, (req,res) => {
    res.json({
        message: 'Post Created'
    });
});

// Creating a JWT TOKEN BY SENDING REQ
app.post('/api/login', (req,res) => {
    // Mock User
    const USER = {
        id : 1 ,
        name : 'Shoyeb',
        email : 'memonshoyeb26@gmail.com'
    }

    jwt.sign({user : USER} ,'seckretkey' , (err, token)=> {
        res.json({
            token : token
        })
    })
});

// Verify Auth Fucntion
function verifyAuth(req,res,next) {
    // Get Auth Header Value
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken  = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(5000, () => console.log('listening on port ....'))