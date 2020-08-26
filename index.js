const express = require('express');
const app = express();
const morgan = require('morgan');

/*function logger(req, res, next){
    console.log(`Ruta Recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}*/

//settings
app.set('appName', 'Aprendiendo Express');
app.set('port', 3000);
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//rutas
/*app.all('/user', (req, res, next) => {
    console.log('Pasa por aqui');
    next();
})*/

app.get('/', (req, res) => {
    const data = [{name : 'Juan'}, {name : 'Joel'}, {name : 'Cameron'}];
    res.render('index.ejs', {people : data});
})

app.get('/user', (req, res) => {
    res.json({
        usuario : 'Ivan',
        apellido : 'Riveros'
    });
})

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Peticion POST Recibida');
})

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`Usuario ${req.params.id} actualizado`);
})

app.delete('/user/:userId', (req, res) => {
    console.log(req.body);
    res.send(`Usuario ${req.params.userId} eliminado`);
})

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log("Server en puerto ", app.get('port'));
})