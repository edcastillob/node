const fs = require('fs');

    const crearArchivo = async(base = 5) => { 

        try {
            
            console.log('----------------------')
            console.log(`    Tabla del: ${base}`)
            console.log('----------------------')
    
            let salida = '';
    
            for (let i = 1; i < 11; i++) {
                salida += ` ${base} * ${i} = ${base*i}\n`;            
            }
            console.log(salida);
    
           fs.writeFileSync( `tabla-${base}.txt`, salida);           
    
            return('Archivo creado correctamente...');
         
        } catch (err) {
            throw(err)
        }
        
     }

     module.exports = {
        crearArchivo
     }