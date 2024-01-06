const express=require('express');
const cookieParser = require('cookie-parser');
const conectarDB = require('./config/db')

const cors =require('cors')
//se crea el servidor 
const app= express();

//Conectamos a labase de datos
conectarDB();
app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use('/api/libros', require('./routes/libros'));

app.listen(5000,()=>{
    console.log('corriendo desde Nodejs')
})





