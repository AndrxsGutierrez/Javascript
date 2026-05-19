// clases (en ralidad nos sirven para crear plantillas de objetos)
class Person {
    constructor(name, age, alias){
        //tendria que asignar estas propiedades para guardarla dentro de la clase con this 
        this.name = name
        this.age = age
        this.alias = alias
        // this hace referencia a esa instacia es un metodo especial para inicialiar el objeto

    } // es como una especie de funcion o metodo especial que nos permite definir cual es la estrucutura de propiedades inicial de la persona en este caso

}

// sintaxis
let person = new Person('Andres G', 19, 'Bebe')
let person2 = new Person('Jose Daniel', 25, 'Rambo')
console.log(person);
console.log(person2);

// Valores por defecto

class PersonDefault {
    constructor(name = 'Sin nombre', age = 0, alias = 'sin alias'){
        this.name = name
        this.age = age
        this.alias = alias
    } 
}

console.log(new PersonDefault());
let nosee = new PersonDefault('Andres')
console.log(nosee);

// acceso a propiedades
console.log(nosee.alias); // funciona igual que los objetos porque en realidad es un objeto como tal

nosee.alias = 'ya tiene alias'
console.log(nosee.alias);

// funciones en clases

class Person244 {
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walks() {
        console.log('what this is?');
    }
}

let person23 = new Person244('Andres G', 19, 'Bebe')

person23.walks()
console.log(person23);

// propiedades privadas
class PrivatePerson {
    #bank // se define ante con # para que algo sea privado
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }
}

let person30 = new PrivatePerson('Andres lG', 19, 'Bebe', 3237884772)
console.log(person30);

// console.log(person30.bank); no se puede acceder porque la colocamos privada


// Getters y Setters
class GetSetPerson {
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age= age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    } // es un tipo de funcion especial get lo que hace es que la propiedad que yo he elegido o pusto como privada me permite leerla es de lectura mas no de escritura

    set bank(newB) {
        this.#bank = newB
    } // en cambio este es de escritura

    get bank() {
        return this.#bank
    } 
}

let person31 = new GetSetPerson('Andres lG', 19, 'Rambo', 3237884772)
console.log(person31); // no va a imprimir nada porque todo es privado
console.log(person31.name); // crea el nombre de la propiedad sin ser privada
person31.bank = 1234567899999
console.log(person31.bank);

// hererncia (nos sirve para heredar las propiedades y el comportamiento de una clase)

class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal hace sonido");
    }
}
// queremos que esta clase herede el comportamiento generico de la clase animal hacemos esto, hereda mas bien el constructor de su super clase o padre
class Dog extends Animal{
    sound() {
        console.log('Guau guau');
    } // aqui reescribimos el comportamiento generico

    run(){
        console.log(`El perro ${this.name} ladra`);
    }
}

class Fish extends Animal{
    // queremos que una clase tenga su propio constructor
    constructor(name, size) {
        super(name) // hace una llamada a su super clase o clase padre para reescribir
        this.size = size
    }

    glu(){
        console.log(`El pez ${this.name} hace glu glu y tiene un tamano de ${this.size} cm`);
    }
}
let myDog = new Dog('Raul')
let myFish = new Fish('Raul', 25)
myDog.run()
myDog.sound()
myFish.glu()
myFish.sound() // hasta ahora lo que entiendo e que una clas puede heredar de otra el comportamiento y desde ahi crear su propio comportamiento pero tambien si la clase padre tiene funciones el tambien las hereda, 

// metodos estaticos

class MathOperation {

    static sum(a, b) { // con static podemos llamar a la funcion sin instanciar como haciamos antes
        return a + b
    }
    static rest(a, b) { // con static podemos llamar a la funcion sin instanciar como haciamos antes
        return a - b
    }
    static mult(a, b) { // con static podemos llamar a la funcion sin instanciar como haciamos antes
        return a * b
    }
    static div(a, b) { // con static podemos llamar a la funcion sin instanciar como haciamos antes
        return a / b
    }
}

console.log(MathOperation.sum(5, 7)); 
console.log(MathOperation.rest(5, 7)); 
console.log(MathOperation.div(5, 7)); 
console.log(MathOperation.mult(5, 7)); 

class Perro {
  // Tu método aquí
  ladrar(){
    return 'Guau'
  }
  
}

function hacerLadrido() {
  // Instancia y llama al método
  let ladrido = new Perro()
  ladrido.ladrar()
}   

hacerLadrido()

try {
    
} catch (error) {
    
}



