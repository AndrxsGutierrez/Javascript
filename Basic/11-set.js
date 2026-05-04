
// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev") // añade al final

console.log(mySet)

mySet.delete("https://moure.dev") // tenemos que indicar lo que queremos borrar

console.log(mySet)

console.log(mySet.delete("Brais")) // devuelve true si el elemnto existe y fue eliminado
console.log(mySet.delete(4)) // develve false si el elemnto no exista en el set

console.log(mySet)

// has
//comprueba si existe algo dentro del set devolviendo un true si existe o false si no esxiste
console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size
// longitud
console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)