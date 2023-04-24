//definir variables 
const express = require('express'); //http
const hbs = require('hbs'); //html dinamico
const bodyParser = require('body-parser'); //procesar solicitudes post 
const port = process.env.port || 3000; //puerto
const app = express();

//motor de vistas html dinamico
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/vies/partials', ()=>{});

//middleware - use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true})); //post
app.use(bodyParser.json());

//definir las rutaas
app.post('/dashboard',(req,res)=>{
    //res.send('aqui va el dash'); texto plano
    //res.sendfile('dashboard.html') archivo
    res.render('dashboard',{
        nombre : "Axel",
        email : "ejemplo@gmail.com"
    }); //vista dinamica
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('*',(req,res)=>{
    res.render('404');
})

//para el desarrollador
app.listen(port,()=>{
    console.log('el servidor express esta ejecutandose en el puerto: '+ port);
})