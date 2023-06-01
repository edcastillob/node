const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors');
const argv = require('./config/yargs')

console.clear();

// console.log(process.argv);
// console.log(argv)
// console.log('base: yargs', argv.base)
// const base= 3;

crearArchivo(argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.blue, 'creado') )
.catch(err => console.log(err))
        