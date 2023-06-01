const argv = require('yargs')

            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: 'true',
                describe: 'Se refiere a la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',              
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',              
                default: 10,
                describe: 'Numero limite de la tabla de mult'
            })
            .check((argv, option) => { 
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
             })  
            
                            
            .argv;

            module.exports= argv;