const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/registro-Alumnos', {
    useNewUrlParser: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));

// mongoose.connect('mongodb+srv://Jorge:Jorge01@cluster0.tbdkk.mongodb.net/Registro-form', {
//         useNewUrlParser: true
//     })
//         .then(db => console.log('Db is connected'))
//         .catch(err => console.log(err));