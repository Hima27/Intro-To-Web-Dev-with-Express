const express = require('express');
const path = require('path');

const users = [];

const app = express();
app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false}));

//routes
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/subscribe', function(req, res) {
    res.sendFile(path.join(__dirname, '/loaded.html'));
});

app.post('/subscribe', function(req, res) {
    users.push({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    })

    console.log(users);

});



//web app must listen to a port number in order to display the work
app.listen(1000);