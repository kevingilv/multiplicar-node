const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('crear', 'Crea la tabla de multiplicar en un txt', opciones).help()
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones).help()
    .argv;

module.exports = {
    argv
}