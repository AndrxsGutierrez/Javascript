myArray = [1, 2, 3, 4]
let person = {
    name: 'Andres',
    edad: 19,
    alias: 'nene'
}

let value = myArray[0]
console.log(value);

let namedd = person.name
console.log(namedd);

// Desestructuracion
// sintaxis en arrays

let [value1, value2] = myArray
console.log(value1);
console.log(value2);

// sintaxis en arrays con valorespor defecto

let [value99, value77 = 0 ] = myArray
console.log(value77);

// ignorar elementos del arrrays

let [value10, , , value13] = myArray

// sintaxis objetos
// let { name, edad } = person
// console.log(name);
// console.log(edad);

// sintaxis en objetos con valorespor defecto

let { name, edad, alias = 'bebe' } = person
console.log(name); // si se le coloca otro nombre de la variable que en realidad es el nombre de la llave del objeto obviamente dara undefined
console.log(edad);
console.log(alias);

// Sintanxis objetos con nuevos nombres e varibles

let { name: nombre, edad: age, alia3s = 'bebe' } = person
console.log(nombre); 
console.log(age);
console.log(alias);

// desestructuracion de objetos anidanos
let person3 = {
    name: 'Andres',
    edad: 19,
    alias: 'nene',
    walks: function(){
        console.log('what this is?');
    },
    job: {
        name: 'Programador',
        exp: 1,
        word: function(){
        console.log(`yes, I do ${this.name}`); //this hace referencia a ese objeto dentro del cual se encuentra de ahi no ams
        }
    }
}

let {name: name5, job: {name: ocupacion}} = person3
console.log(ocupacion);
console.log(name5);

// PROPAGACION operador de propagacion (...) lo que permite es expandir elementos de un arrays o objetos a otros arrays o otros objetos

//sintaxis arrays

let myArray2 = [...myArray] //copia
let myArray3 = [...myArray2, 5, 6]
console.log(myArray2);
console.log(myArray3)

// combinacion de arrays
let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4);

// sintaxis objetos

let person5 = {...person}
console.log(person5); // copia de objetos

let person6 = {...person, habilidad: 'Scrum master'}
console.log(person6);


