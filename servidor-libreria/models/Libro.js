const mongoose=require('mongoose');

const LibrosSchema = mongoose.Schema({
    titulo:{
        type: String,
        require: true,
    },
    autor:{
        type: String,
        require: true
    },    
    estado:{
        type: String,
        require: true
    },
    anioPublicacion:{
        type: Date,
        
    }
});

module.exports= mongoose.model('Libro',LibrosSchema);