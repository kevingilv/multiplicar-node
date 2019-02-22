const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .then(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}