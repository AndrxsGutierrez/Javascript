/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// el comentario

// 2. Escribe un comentario en varias líneas

/* 
los 
fucking comentarios
jaja
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let name = 'andres' //string
let age = 19 // nuemro entero
let heigh = 1.82 // nuemro decimal
let verdadero = true // boolean
let falso = false // boolean
let unaVariable // undefined (variable no definida)
let valor = null // null (valor de la variable nulo (se espera su valor en algun momento))
let mySymbol = Symbol('mySymbol') // symbol (sirven para los objetos) valor unico e inmutable
let myBigInt = 566565659898989889898n // BigInt enteros grandes

// 4. Imprime por consola el valor de todas las variables

console.log(name)
console.log(age)
console.log(heigh) 
console.log(verdadero) 
console.log(falso)
console.log(unaVariable) 
console.log(valor) 
console.log(mySymbol) 
console.log(myBigInt) 

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof name)
console.log(typeof age)
console.log(typeof heigh) 
console.log(typeof verdadero) 
console.log(typeof falso)
console.log(typeof unaVariable) 
console.log(typeof valor) 
console.log(typeof mySymbol) 
console.log(typeof myBigInt) 

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

name = 'andres camilo' //string
age = 19.5 // nuemro entero
heigh = 1.878 // nuemro decimal
verdadero = false // boolean
falso = true // boolean
unaVariable // undefined (variable no definida)
valor = null // null (valor de la variable nulo (se espera su valor en algun momento))
mySymbol = Symbol('ymbol') // symbol (sirven para los objetos) valor unico e inmutable
myBigInt = 56656554444444444444444444449889898n // BigInt enteros grandes

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

name = 15 //string
age = false // nuemro entero
heigh = 'hola' // nuemro decimal
verdadero = 25 // boolean
falso = null // boolean
unaVariable // undefined (variable no definida)
valor = null // null (valor de la variable nulo (se espera su valor en algun momento))
mySymbol = Symbol('ymbol') // symbol (sirven para los objetos) valor unico e inmutable
myBigInt = 56656554444444444444444444449889898n // BigInt enteros grandes

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse