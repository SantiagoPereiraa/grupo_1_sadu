
const express = require('express');

const app = express();

const mainRouts = require('./routes/mainRoutes');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRouts);

app.listen(3000, () =>{
    console.log('servidor funcionando en puerto 3000');
});









