//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/mulitplicar');

let comando = argv._[0];

switch( comando ) {

  case 'listar':
    listarTabla(argv.base, argv.limite)
      
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado: `, colors.green(archivo)) )
      .catch( error => console.log(error));
    break;

  default:
    console.log('Comando no reconocido');

}

//Process es un modulo global de proceso incorporado
//let Argv = process.argv;
//let parametro = Argv[2];
//let base = parametro.split('=')[1];