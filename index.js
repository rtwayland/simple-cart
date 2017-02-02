const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('./config')
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));


app.post('/api/cart', (req, res) => {

    if (Array.isArray(req.session.cart)) {
        req.session.cart.push(req.body);
    } else {
        req.session.cart = [req.body];
    }

    res.status(200).send('ok');
});

app.get('/api/cart', (req, res) => {
    res.status(200).json(req.session.cart);
})



app.listen(3000, function() {
    console.log('listening on 3000');
})
