// tipos de consoles

// log 
console.log('putaaa');

//error

console.error('este es un msg error'); // se pinta de rojo
console.error('error al conectarse a la base de datos', new Error('conexion fallida'));

// warn para mostrar abvertencias
console.warn('msg de abvertencia'); // se pinta amarillo

// info
console.info('este es un msg de info adicional');

// table 
let data = [
    ['Andres', 45],
    ['Andres', 45],
    ['Andres', 45],
    ['Andres', 45],
    ['Andres', 45],
]
console.table(data)

let data2 = [
    {name: 'Andres', age: 45},
    {name: 'Andres', age: 45},
    {name: 'Andres', age: 45},
    {name: 'Andres', age: 45},
    {name: 'Andres', age: 45},
    {name: 'Andres', age: 45},
    {name: 'Andres', age: 45},
]
console.table(data2);

// group
console.group('usuario');
console.log('perrra');
console.log('perrra');
console.log('perrra');
console.groupEnd()

// time
console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

// assert evalua si es falso

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// clear

// console.clear()