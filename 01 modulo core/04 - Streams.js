'use strict';
const fs = require('fs');
const readStream = fs.createReadStream('assets/nombres.txt');
const writeStream = fs.createWriteStream('assets/nombres_copia.txt');
readStream.pipe(writeStream);
readStream
	.on('end', ()=> console.log('terminé de leer el archivo'))
	.on('data', chunk => console.log('he leido: ' + chunk.length + ' caracteres'))

//puedo escribir asi el archivo para ahorrar palabras