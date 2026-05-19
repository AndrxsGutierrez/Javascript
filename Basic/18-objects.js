// Sintaxis
let person = {
    name: 'Andres',
    edad: 19,
    alias: 'nene'
}

// acceso a propiedades

// notacion por punto
console.log(person.name);

// notacion por corchetes
console.log(person['edad']);

// modificacion
person.name = 'Andres Gutierrez'
console.log(person.name);

// eliminar propiedades
delete person.edad
console.log(person);

// anadir propiedad
person.email = 'andresgutierrez@gmail.com'
person['age'] = 25
console.log(person);

// metodos (funciones)
let person2 = {
    name: 'Andres',
    edad: 19,
    alias: 'nene',
    walks: function(){
        console.log('what this is?');
    }
}

person2.walks() // como se accede a esa funcion dentro del objeto

// Anidacion de objetos

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
console.log(person3);
console.log(person3.job);
console.log(person3.job.name);
person3.job.word()

// Igualdad de objeto

let person4 = {
  name: 'Andres Gutierrez',
  alias: 'nene',
  email: 'andresgutierrez@gmail.com',
  age: 25
}

console.log(person);
console.log(person4);
console.log(person == person4); // la forma en la que estos objetos se guardan en memoria son diferentes y por eso da false de cualquier manera se guardan con una referencia con una direccion de memoria

console.log(person.name == person4.name)

//iteracion

for (const key in person4) {
    console.log(key + ' ' + person[key]);
}
for (const key in person4) {
    console.log(key + ' ' + person[key]);
}
for (const key in person4) {
    console.log(key + ' ' + person[key]);
}

// funciones como objetos

function person44 (name, age){ // deberia ser una clase
    this.name = name
    this.age = age
}

let persona5 = new person44('andres', 54)
console.log(persona5);
console.log(person44.name);

console.log(typeof person44);
console.log(typeof persona5);