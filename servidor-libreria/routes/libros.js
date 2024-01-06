const express =require('express');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const librosContoller= require('../controllers/librosContoller')


// api/libros

router.post('/',librosContoller.crearLibro );    
router.get('/',librosContoller.obtenerLibros );
router.put('/:id',librosContoller.actualizarLibro );
router.get('/:id',librosContoller.obtenerLibro );
router.delete('/:id',librosContoller.eliminarLibro );
    


module.exports= router;