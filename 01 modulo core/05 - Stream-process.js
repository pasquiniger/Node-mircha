'use strict';
const 
	stdin = process.stdin, 
	stdout = process.stdout,
	person = {
		name : null,
		age : 0
	},
	saveAge = (age) =>{
		person.age = age
		stdout.write(`datos de la persona: \nnombre: ${person.name} \nedad: ${person.age} años\n`)
		process.exit()
	},
	saveName = (name)=>{
		person.name = name
		let question = `Hola ${person.name}, cuantos años tienes?`
		quiz(question, saveAge)
	},
	quiz = (question, callback) =>{
		stdin.resume()
		stdout.write(question + ': ')
		stdin.once('data', res => callback(res.toString().trim()))
	}

stdin.setEncoding('utf8');
quiz('como te llamas?', saveName)