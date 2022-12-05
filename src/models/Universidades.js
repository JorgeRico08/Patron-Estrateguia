const { Schema, model } = require('mongoose');


const universidadSchema = new Schema({
    nombreUniversidad: {type: String},
    costo: {type: Number},
    carreras:[{
        nombreCarrera: {type: String, unique: true},
    }]
 });

 module.exports = model('Universidades', universidadSchema);