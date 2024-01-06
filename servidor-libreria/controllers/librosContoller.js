const Libro = require("../models/Libro");

exports.crearLibro = async(req,res)=>{
    try {
        let libro;
        libro = new Libro(req.body);
        await libro.save();
       res.send(libro)
    } catch (error) {
        console.log(error),
        res.status(500).send('Internal server error')
    }
}

exports.obtenerLibros= async (req,res)=>{
    try {
        const libros=await Libro.find();
        res.json(libros)

    } catch (error) {
        console.log(error),
        res.status(500).send('Internal server error')
    }

    }

    exports.actualizarLibro= async (req,res)=>{
        try {
            const{titulo,autor,estado, anioPublicacion}=req.body;
            let libro = await Libro.findById(req.params.id);

            if(!libro){
                res.status(404).json({msg: 'No existe el libro'})
            }
            libro.titulo=titulo;
            libro.autor=autor;
            libro.anioPublicacion=anioPublicacion;
            libro.estado=estado;

            libro= await Libro.findOneAndUpdate({ _id: req.params.id}, libro,{new: true})
            res.json(libro);
            
        } catch (error) {
            console.log(error),
            res.status(500).send('Internal server error')
        }
    }

    exports.obtenerLibro= async (req,res)=>{
        try {
            
            let libro = await Libro.findById(req.params.id);

            if(!libro){
                res.status(404).json({msg: 'No existe el libro'})
            }
            res.json(libro);
            
        } catch (error) {
            console.log(error),
            res.status(500).send('Internal server error')
        }
    }

    exports.eliminarLibro= async (req,res)=>{
        try {
            let libro = await Libro.findById(req.params.id);

            if(!libro){
                res.status(404).json({msg: 'No existe el libro'})
            }

            await  Libro.findOneAndDelete({_id: req.params.id} )
               
            res.json({msg: 'Libro eliminado cocn exito'});
            
            
        } catch (error) {
            console.log(error),
            res.status(500).send('Internal server error')
        }
    }


   