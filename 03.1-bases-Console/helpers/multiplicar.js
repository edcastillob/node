const fs = require('fs');

    const crearArchivo = async(base = 5, l = false) => { 

        try {
          
            let salida = '';
    
            for (let i = 1; i < 11; i++) {
                salida += ` ${base} * ${i} = ${base*i}\n`;            
            }
            if (l) {
                console.log('----------------------')
                console.log(`    Tabla del: ${base}`)
                console.log('----------------------')
                console.log(salida)
               }
    
           fs.writeFileSync( `tabla-${base}.txt`, salida);           
    
            return('Archivo creado correctamente...');
         
        } catch (err) {
            throw(err)
        }
        
     }

     module.exports = {
        crearArchivo
     }