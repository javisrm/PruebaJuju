/* const mongoose = require('mongoose');
const usuarioSchema = require('./models/usuario');
const usuario = require('./routes/usuario');

 usuarioSchema.statics = {
  create: function (data, cb) {
    const usuario = new this(data);
    usuario.guardar(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  }
} 





const usuarioModels = mongoose.model('Usuario', usuarioSchema);
module.exports = usuarioModels; */