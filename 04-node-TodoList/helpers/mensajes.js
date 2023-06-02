require('colors');

const mostrarMenu = () => { 
    return new Promise (resolve => { 
        
        console.clear();
    
        console.log('-- TodoList @Edwar Castillo--'.blue);
        console.log('==========================='.blue);
        console.log('   Seleccione una Opción   '.blue);
        console.log('===========================\n'.blue);
        
        console.log(`${ '1.'.blue } Crear tarea`);
        console.log(`${ '2.'.blue } Listar tareas`);
        console.log(`${ '3.'.blue } Tareas completadas`);
        console.log(`${ '4.'.blue } Tareas pendientes`);
        console.log(`${ '5.'.blue } Completar tareas`);
        console.log(`${ '6.'.blue } Borrar tareas`);
        console.log(`${ '0.'.blue } Salir\n`);
    
    
        const readline = require('readline').createInterface({ // lectura de la opcion readline uso propiedades del process
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opción: ', (opt) => { 
           
        readline.close();
        resolve(opt);
         })
    });

 }

    const pausa = () => { 

        return new Promise((resolve) => { 

            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
        
            readline.question(`\nPresione ${ 'Enter'.yellow } para continuar...\n`, (opt) => { 
               
                readline.close();
                resolve();
             })
         });
    
}
    


 module.exports = {
    mostrarMenu,
    pausa
 }