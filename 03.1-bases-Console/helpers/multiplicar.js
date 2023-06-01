const fs = require('fs');
const colors = require('colors');

    const crearArchivo = async(base = 5, l = false, hasta) => { 

        try {
          
            let salida = '';
            let consola = '';
    
            for (let i = 1; i <= hasta; i++) {
                salida += ` ${ base}  * ${ i } = ${ base * i }\n`;            
                consola += ` ${base} ${'*'.yellow} ${i} ${'='.yellow} ${base*i}\n`;            
            }
            if (l) {
                console.log('----------------------'.green)
                console.log('    Tabla del: '.green, base)
                console.log('----------------------'.green)
                console.log(consola)
               }
    
           fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);           
    
            return('Archivo creado correctamente...');
         
        } catch (err) {
            throw(err)
        }
        
     }

     module.exports = {
        crearArchivo
     }