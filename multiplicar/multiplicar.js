const fs = require('fs');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número.`);
            return;
        }
        let tablaImprimir = '';
        for (var i = 1; i <= limite; i++) {
            tablaImprimir += `${ base } x ${ i } = ${base * i} \n`;
        }
        const data = new Uint8Array(Buffer.from(tablaImprimir));
        let nombreArchivo = `./archivos-tablas/tabla-de-${base}-al-${limite}.txt`;

        fs.writeFile(nombreArchivo, data, (err) => {
            if (err) { reject(err) };
            resolve(`El archivo ${nombreArchivo} ha sido creado!`);
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            return reject(`${ base } no es un número.`);
        }
        if (Number(base) > 1000 || Number(limite) > 1000) {
            return reject('NEL.. pa que quieres tantos? xd');
        }
        let tablaImprimir = '';
        for (var i = 1; i <= limite; i++) {
            tablaImprimir += `${ base } x ${ i } = ${base * i} \n`;
        }
        resolve(tablaImprimir);
    })
};

module.exports = {
    crearArchivo,
    listarTabla
};