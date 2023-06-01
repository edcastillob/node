const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: 'true'
            })
            .check((argv, option) => { 
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
             })  
             .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: 'true',
                default: false
            })
                            
            .argv;

console.clear();

// console.log(process.argv);
console.log(argv)

// console.log('base: yargs', argv.base)

// const base= 3;

crearArchivo(argv.b, argv.l)
.then( nombreArchivo => console.log(nombreArchivo, 'creado') )
.catch(err => console.log(err))
        