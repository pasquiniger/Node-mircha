//Tambien funciona bien asi
//Falta que haga el trabajo 09
'use strict'

class MyStream{
    constructor(){
        setInterval(()=>this.funcionTiempo(), 1000)
    }
    addZero(num){
        return (num < 10) ? (`0${num}`) : num
    }
    funcionTiempo(){
        let date = new Date(),
        hrsAmPm = ( date.getHours() > 12 ) ? ( date.getHours() - 12 ) : date.getHours(),
        hrs = this.addZero( hrsAmPm ),
        min = this.addZero(date.getMinutes()),
        sec = this.addZero(date.getSeconds()),
        ampm = ( date.getHours() < 12 ) ? 'am' : 'pm',
        msg = `${hrs} : ${min} : ${sec} ${ampm}`
        console.log(msg)
    }
}

const stream = new MyStream();
