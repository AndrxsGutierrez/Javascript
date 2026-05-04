// Array DECALARACION

let myArray = []
let myArray2 = new Array()

myArray = [1]
myArray2 = [3]

console.log (myArray)
console.log (myArray2)

// metodos comunes 

myArray = []

// push (para enviar elemento al array) y pop 

myArray.push('Andres')
myArray.push("Camilo")
myArray.push('Gutierrez')
myArray.push(19)

console.log (myArray)

myArray.pop ()
console.log(myArray.pop ()) // elimina el ultimo y lo devuelve
console.log (myArray)

// shift y unshift

myArray.shift () // elimina el primero y lo devuelve
console.log(myArray)

myArray.unshift('milo', 'jota') // sirve para agregar un elemento al inicio del arrays
console.log(myArray)

// length
console.log(myArray.length) // cuenta cuanot tiene

// clear

myArray = []
console.log(myArray)

// slice mustra solo lo que queremos
// splice elimina