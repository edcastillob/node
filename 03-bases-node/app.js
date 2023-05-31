const fs = require('fs');

        console.clear();
        const base= 7;
        console.log('----------------------')
        console.log(`    Tabla del: ${base}`)
        console.log('----------------------')

        let salida = '';

        for (let i = 1; i < 11; i++) {
            salida += ` ${base} * ${i} = ${base*i}\n`;            
        }
        console.log(salida);

       fs.writeFile( `tabla-${base}.txt`, salida, (err) => { 
            if(err) throw(err);

            console.log('Archivo creado correctamente...');
        } )