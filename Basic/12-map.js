/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set
// es para actualizar un elemento o para agregar si no existe la clave igual que cn los diccionarios en python
myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get
// para obtener el valor con la clave
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
// para saber si una clave existe o no
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete
// para eliminar un clave con su valor
myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)