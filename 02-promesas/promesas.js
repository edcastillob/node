const empleados = [
    {
    id: 1,
    nombre: 'Fernanda'
    },
    {
        id: 2,
        nombre: 'Karlins'
    },
    {
        id: 3,
        nombre: 'Edwar'
    }
];

const salarios = [
    {
    id: 1,
    salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 2500
    }
];

const getEmpleado = (id) => { 
    
    return new Promise( ( resolve, reject ) => { 

    const empleado = empleados.find(( e ) => e.id === id)?.nombre;

        empleado 
        ? resolve( empleado )
        : reject( `No existe empleado con el id ${id}` );  
     })    
 }


 const getSalario = (id) => { 
    
    return new Promise( ( resolve, reject ) => { 
    const salario = salarios.find(( s ) => s.id === id)?.salario;

        salario 
        ? resolve( salario )
        : reject( `No existe salario con el id ${id}` );  
     })    
 }

 
 //  getEmpleado(id)
 //  .then( empleado => console.log( empleado ))
 //  .catch( err => console.log(err) )
 
 //  getSalario(id)
 //  .then( salario => console.log( `Su salario equivale a ${ salario } $` ))
 //  .catch( err => console.log(err) )
 
 
 const id = 3;
 let nombre;
getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id )
    })
    .then( salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}$`))
    .catch( err => console.log(err))