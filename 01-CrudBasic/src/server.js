const express = require("express");

let publications = [];

const server = express();
const morgan = require("morgan");
const { search } = require("../Demo/routes");
server.use(express.json());
server.use(morgan("dev"));

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS


server.post("/posts", (req, res) => {
    
    const { author, title, contents } = req.body;

    if(author && title && contents){

        const result = {
            id: publications.length + 1,
            author,
            title,
            contents,
        }
        publications.push(result);
        res.status(200).json(result)
    }else {
        res.status(404).json({error: "No se recibieron los parámetros necesarios para crear la publicación"})
    }
})

server.get('/posts', (req, res) => { 
    const { author, title } = req.query;   

    if (author && title){
        const coincidencias = publications.filter((coincidencias) =>  
            coincidencias.author === author 
            &&
            coincidencias.title === title
     );

     if (coincidencias.length){
        res.status(200).json(coincidencias)
     }else {
        res.status(404).json({error: "No existe ninguna publicación con dicho título y autor indicado"})
     }    
    }  
});

server.get('/posts/:author', (req, res) => { 
    const { author } = req.params;
    if ( author ){
        const coincidencias = publications.filter((coincidencias) =>  
            coincidencias.author === author           
     )
     if (coincidencias.length){
        res.status(200).json(coincidencias)
     }else {
        res.status(404).json({error: "No existe ninguna publicación del autor indicado"})
     }    
    }  
});


server.put('/posts/:id', (req, res) => { 
    const { id } = req.params;
    const { title, contents } = req.body;

    if( id && title && contents ){
        const coincidencias = publications.find((coincidencia) => coincidencia.id === Number(id) )
        if(!coincidencias){
            res.status(440).json({error: "No se recibió el id correcto necesario para modificar la publicación"})
        }else{
            coincidencias = {
                ...coincidencias, 
                title, 
                contents
            }
            res.status(200).json(coincidencias)
        }  
           
        
    }else{
        res.status(400).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"})
    }

 });


 server.delete('/posts/:id', (req, res) => { 
    const { id } = req.params;

    if( !id ){
        res.status(400).json({error: "No se recibió el id de la publicación a eliminar"})
    }else{
        let coincidencias = publications.filter(searchId => searchId.id !== Number(id));
        if(coincidencias.length === publications.length){
            res.status(400).json( {error: "No se recibió el id correcto necesario para eliminar la publicación"})
        }else{
            publications = coincidencias
            res.status(200).json( { success: true })
        }
    }   
   
})
 



module.exports = { publications, server };
