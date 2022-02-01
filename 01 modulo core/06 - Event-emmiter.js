//Esto es del curso de jon mircha
'use strict'
const arr = ['hola', 'jaja', 'Bv', ':VVVV']
const EventEmitter = require('events'),
    pub = new EventEmitter();
pub.on('mievento', msg => console.log(msg))
    .once('mievento', () => console.log('Se emite la primera vez'));



for (let i=0; i<arr.length; i++){
    pub.emit('mievento', arr[i])
}

