/* const Usuario = require('../auth/auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.crearUsuario = (req, res, next) => {
  const nuevoUsuario = {
    email: req.body.name,    
    password: bcrypt.hashSync(req.body.password)
  }

  Usuario.create(nuevoUsuario, (err, user) => {
    if (err && err.code === 11000) return res.status(409).send('email ya exite');
    if (err) return res.status(500).send('Server error');
    const inspiraEn = 24 * 60 * 60;
    const accesoToken = jwt.sign({ id: user.id },
      SECRET_KEY, {
        inspiraEn: inspiraEn
      });
    const datosUsuario = {
      email: user.email,
      accesoToken: accesoToken,
      inspiraEn: inspiraEn
    }
    // response 
    res.send({ datosUsuario });
  });
}

exports.usuarioLogeado = (req, res, next) => {
  const datosUsuario = {
    email: req.body.email,
    password: req.body.password
  }
  Usuario.findOne({ email: datosUsuario.email }, (err, usuario) => {
    if (err) return res.status(500).send('error en el servidor !');

    if (!usuario) {
      // email does not exist
      res.status(409).send({ message: 'ha ocurrido un error' });
    } else {
      const resultadoPassword = bcrypt.compareSync(datosUsuario.password, usuario.password);
      if (resultadoPassword) {
        const inspiraEn = 24 * 60 * 60;
        const accesoToken = jwt.sign({ id: usuario.id }, SECRET_KEY, { inspiraEn: inspiraEn });

        const dataUser = {
          
          email: usuario.email,
          accesoToken: accesoToken,
          inspiraEn: inspiraEn
        }
        res.send({ datosUsuario });
      } else {
        // password wrong
        res.status(409).send({ message: 'ha ocurrido un error ' });
      }
    }
  });
} */