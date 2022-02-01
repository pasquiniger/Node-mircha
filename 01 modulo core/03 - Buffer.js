/*
Buffers
	Una tira de bytes (datos binarios)
	Similar a un array de enteros
	Tamaño fijo
	Manipular datos directamente
		Sockets
		Streams
		Implementar protocolos complejos
		Manipulación de ficheros/imágenes
		Criptografía
*/
"use strict";

var buf1 = new Buffer(100);
var buf2 = new Buffer(26);
var str = '\u00bd + \u00bc = \u00be';

buf1.write('abcd', 0, 4, 'ascii');

console.log(buf1, buf1.toString('ascii'), str.length)