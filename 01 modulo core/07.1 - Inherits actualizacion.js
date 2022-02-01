//Lo hice y siento bastante satisfaccion
'use strict'
const EventEmitter = require('events');

class MyStream extends EventEmitter {
  reloj(){
    this.emit('cucu')
  }
}

const stream = new MyStream();

const funcionTiempo = ()=>{
  let date = new Date(),
  hrs = date.getHours(),
  min = date.getMinutes(),
  sec = date.getSeconds(),
  msg = `${hrs} : ${min} : ${sec}`
  console.log(msg)
}

stream.on('cucu', () => {
  setInterval(funcionTiempo,1000)
});

stream.reloj();