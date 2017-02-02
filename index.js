const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('./config')
const cartCtrl = require('./cartCtrl');
const app = express();

app.use('/node_modules', express.static('node_modules'));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));


app.post('/api/cart', cartCtrl.addToCart);
app.get('/api/cart', cartCtrl.getCart);



app.listen(3000, function() {
    console.log('listening on 3000');
})
