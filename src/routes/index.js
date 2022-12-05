const { Router } = require('express');
const path = require('path')
const multer = require('multer');
const uuid = require('uuid/v4');
const router = Router();
const Alumno = require('../models/alumnosModel');

//Funcion Multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, cb, filename) => {
        console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 

const upload = multer({ storage: storage })

// Controllers
const Alumnos = require('../controllers/alumnoController');

router.get('/registrar', Alumnos.formResgistro);
router.get('/', Alumnos.ver_alumnos);
router.post('/registrar', upload.fields([{name:'fotoEstudiante', maxCount: 1}, {name:'certificado', maxCount: 1}, {name:'comprobanteDomicilio', maxCount: 1}]),Alumnos.registar_alumnos);
router.get('/registroDocumento/:id', Alumnos.ver_alumno_Id);

router.get('/user/:id/inscripcion-pagoBeca', Alumnos.becado);
router.get('/user/:id/inscripcion-pago', Alumnos.Nobecado);

router.post('/registrarUniversidad/:id', Alumnos.guardarRegistro)

module.exports = router;