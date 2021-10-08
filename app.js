const bodyParser = require('body-parser');
const express = require('express')
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views', 'views');


const shopRoutes = require('./routes/shopRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);


app.listen(3000)