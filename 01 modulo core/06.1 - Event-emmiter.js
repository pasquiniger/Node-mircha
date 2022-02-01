//Esto es sacado de la documentacion oficial

'use strict';
const EventEmmiter = require('events');
class MyEmmiter extends EventEmmiter {};
const myEmmiter = new MyEmmiter();
myEmmiter.on('event', ()=> console.log('un evento ha ocurrido!'));
myEmmiter.emit('event')

