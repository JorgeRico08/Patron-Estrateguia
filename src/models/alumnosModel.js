const { Schema, model } = require('mongoose');
const { stringify } = require('uuid');

const registroSchema = new Schema({
    nombre: {type: String},
    apePat: {type: String},
    apeMat: {type: String},
    calle: {type: String},
    noExterior: {type: Number},
    colonia: {type: String},
    ciudad: {type: String},
    cP: {type: Number},
    telefonoCasa: {type: Number},
    telefonoPersonal: {type: Number},
    telefonoTutor: {type: Number},
    correo:  {type: String},
    bachilleratoPro: {type: String},
    promedio: {type: Number},
    especialidadCursada:  {type: String},
    nombreMama: {type: String},
    apeMatMama: {type: String},
    apePatMama: {type: String},
    nombrePapa: {type: String},
    apeMatPapa: {type: String},
    apePatPapa: {type: String},
    fotoEstudiante:{type: String},
    certificado: {type: String},
    comprobanteDomicilio: {type: String},

    universidad: {type: String},
    carrera: {type: String},
    costoInscripcion: {type: Number},

    registroUniversidad: {type: Boolean},
    
    registroCompleto: {type: Boolean},
    

    created_at: {type: Date, default: Date.now()}
});

module.exports = model('Registro', registroSchema);