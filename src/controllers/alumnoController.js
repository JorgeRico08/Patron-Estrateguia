const toastr = require('express-toastr');
const Swal = require('sweetalert2');

// Models
const Registro = require('../models/alumnosModel');
const Universidades = require('../models/Universidades');

exports.ver_alumnos = (async (req, res) => {
    const images = await Registro.find();
    res.render('index', { images});
});

exports.formResgistro = (async(req, res) => {
    const universidad = await Universidades.find();
    res.render('registrar-alumno', {universidad});
});


exports.ver_alumno_Id = ( (req, res) => {
    const id  = req.params.id;
    Registro.find({_id:id}, (err, result) => {
        if (err) {
            console.log("A ocurrido un error "+err.message);
        } else {
            console.log(result); }
            res.render('perfil-alumno', { datoRegistro:result });
        });
});

exports.registar_alumnos = (async (req, res) => {
    const image = new Registro();
    image.nombre = req.body.nombre,
    image.apePat = req.body.apePat,
    image.apeMat = req.body.apeMat,
    image.calle =  req.body.calle,
    image.noExterior =  req.body.noExterior,
    image.colonia = req.body.colonia,
    image.ciudad = req.body.ciudad,
    image.cP = req.body.cP,
    image.telefonoCasa = req.body.telefonoCasa,
    image.telefonoPersonal = req.body.telefonoPersonal,
    image.telefonoTutor = req.body.telefonoTutor,
    image.correo = req.body.correo,
    image.bachilleratoPro = req.body.bachilleratoPro,
    image.promedio = req.body.promedio,
    image.especialidadCursada = req.body.especialidadCursada,
    image.universidad =  req.body.universidad,
    image.carrera = req.body.carrera,
    image.costoInscripcion = req.body.costoInscripcion,
    image.nombreMama = req.body.nombreMama,
    image.apeMatMama = req.body.apeMatMama,
    image.apePatMama = req.body.apePatMama,
    image.nombrePapa = req.body.nombrePapa,
    image.apeMatPapa = req.body.apeMatPapa,
    image.apePatPapa = req.body.apePatPapa,
    image.registroUniversidad = false,
    image.registroCompleto = false,
    image.fotoEstudiante = req.files.fotoEstudiante[0].filename,
    image.comprobanteDomicilio = req.files.comprobanteDomicilio[0].filename,
    image.certificado = req.files.certificado[0].filename,

    await image.save((err)=>{
        if (err) {
            console.log("A ocurrido un error",err.message)
        } else {
            res.redirect('/');
        }
    });
});

//Strategy

const Becado = require('../quoter/localstrategy');
const QuoterContexs = require('../quoter/quotercontext');
const LocalWithTaxStrategy = require('../quoter/localwithtaxstrategy.js');
const gain = 1.1;
const gainDescuento = 350;
const IVA = 0.16;

exports.becado = (async (req, res) => {
    const id  = req.params.id;
    const alumno = await Registro.find({_id:id});

    const quoter = new QuoterContexs(new Becado(), gainDescuento);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    res.render('local-beca', { A:total, B:alumno});
});

exports.Nobecado = (async (req, res) => {
    const id  = req.params.id;
    const alumno = await Registro.find({_id:id});

    const quoter = new QuoterContexs(new LocalWithTaxStrategy(IVA), gain);
    const amount = req.query.amount;
    const total = quoter.quote(amount);
    
    res.render('local-pagoNormal', { B:total, C:alumno});
});

exports.guardarRegistro = ((req, res) => {
const id = req.params.id;
const data = req.body;
Registro.updateOne({ _id: id }, { $set: { costoInscripcion: data.costoInscripcion,registroCompleto: true, registroUniversidad: true}},
    (error) => {
        if (error) {
            console.log("A ocurrido un error "+error.message);
        } else {
            res.redirect("/");
        }
        }
    );

});


