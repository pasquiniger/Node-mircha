// INTENTAR CORREGIR 

'use strict';
const EventEmmiter = require('events');
class MyEmmiter extends EventEmmiter{
    write(data){
        this.emit('data', data)
    }
};

const repite = ()=> console.log('hola')

function Clock(){
    let self = this;
    setInterval(self.emit('tictac'),1000)
}
var cucu = new MyEmmiter()
/*
Clock.prototype.theTime = ()=>{
    let date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = `${hrs} : ${min} : ${sec}`
}
*/
cucu.on('tictac', ()=> cucu.theTime)