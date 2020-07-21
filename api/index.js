require('./config/config');


//morgan
const morgan = require('morgan');
//path
const path = require('path');

const express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

//todas las URL
app.use(require('./routes/indexRoutes'));

//Conexión con la base de datos
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carpoolingsena', {useNewUrlParser: true}, () => {
    console.log('Se hizo la conexión')
});

//almacenamiento de archivos
app.use('/uploads', express.static(path.resolve('uploads')))

app.listen(process.env.PORT, function () {
    console.clear();
    console.log('runing on port 3000...');
})
