require('colors');

const inquirer = require('inquirer');


const preguntas = [
{
    type: 'list',
    name: 'option',
    messahe: 'Que desea hacer?',
    choices: [
        {
            value: '1',
            name:`${ '1.'.blue } Crear tarea`
        },
        {
            value: '2',
            name:`${ '2.'.blue } Listar tareas`
        },
        {
            value: '3',
            name:`${ '3.'.blue } Tareas completadas`
        },
        {
            value: '4',
            name:`${ '4.'.blue } Tareas pendientes`
        },
        {
            value: '5',
            name:`${ '5.'.blue } Completar tareas`
        },
        {
            value: '6',
            name:`${ '6.'.blue } Borrar tareas`
        },
        {
            value: '0',
            name:`${ '0.'.blue } Salir\n`
        },
    ]
}
];
const inquirerMenu = async() => { 

    console.clear();
    
    console.log('-- TodoList @Edwar Castillo--'.blue);
    console.log('==========================='.blue);
    console.log('   Seleccione una Opción   '.blue);
    console.log('===========================\n'.blue);
    
    const {option} = await inquirer.prompt(preguntas);
    return option;
 }

 const pausa = async() => { 

    const question = [
        {
            type:'input',
            name:'enter',
            message:`Presione ${ 'Enter'.yellow } para continuar...\n`
        }
    ]
     console.log('\n')
    await inquirer.prompt(question);
 }


 module.exports = {
    inquirerMenu,
    pausa
 }