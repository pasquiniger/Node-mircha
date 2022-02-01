//Lo hice y siento bastante satisfaccion
'use strict'
const EventEmitter = require('events');

class MyStream extends EventEmitter {
  reloj(){
    this.emit('cucu')
  }
}

const stream = new MyStream();

function addZero(num){
  return (num < 10) ? (`0${num}`) : num
}

const funcionTiempo = ()=>{
  let date = new Date(),
    hrsAmPm = ( date.getHours() > 12 ) ? ( date.getHours() - 12 ) : date.getHours(),
    hrs = addZero( hrsAmPm ),
    min = addZero(date.getMinutes()),
    sec = addZero(date.getSeconds()),
    ampm = ( date.getHours() < 12 ) ? 'am' : 'pm',
    msg = `${hrs} : ${min} : ${sec} ${ampm}`
  console.log(msg)
}

stream.on('cucu', () => {
  setInterval(funcionTiempo,1000)
});

stream.reloj();

