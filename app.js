const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Esteban Robert',
        titulo: 'Curso de Node'
    });
});

app.get('/hola-mundo', function (req, res) {
    res.send('Ruta Hola mundo');
})

/* app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
}) */

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Esteban Robert',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Esteban Robert',
        titulo: 'Curso de Node'
    });
})

app.listen(port, () => {
    console.log(`Ejemplo corriendo en http://localhost:${port}`)
});