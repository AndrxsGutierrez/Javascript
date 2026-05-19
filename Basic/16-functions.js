// simple

function myFunc() { 
    console.log('hola perra');
    
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// parametros
const name = 'el cejas'

function myFunl(name) {
    console.log(`hola perra mlp de ${name}`); 
}

myFunl(name)

// anonimas
const anonima = function(name) {
    console.log(`hola perra mlp de ${name}`);
}
anonima("Iron Man")


// funciones flechas
const flecha = (name) => {
    console.log(`hola perra mlp de ${name}`);
}
const flecha2 = (name) => console.log(`hola perra mlp de ${name}`) //simplificada cuando solo se va a utilizar una sola linea
flecha('messironaldo')
flecha2('milton')

// parametros 
const suma = (a, b) => console.log(a + b);
suma(5, 6)
// para colocar valores por defecto
const sumaDefault = (a = 0, b = 0) => console.log(a + b);
sumaDefault()
sumaDefault(9)
sumaDefault(5, 5)

// retorno de valores
function mult(a, b) { 
    return a * b
}

const result = (a, b) => {return a * b}
console.log(result(5, 4));

// funciones anidadas
function extern() {
    console.log('funcion externa');
    function intern(){
        console.log('funcion interna');
    }
    intern() // para podr llamr a esta funcion de esta manera ya que si se intenta llamr como externa dara error
}
extern() // scope rango de actuacion


// funciones de orden superior
// son funciones que reciben otras funciones como argumento
function ordenSu (func, name){
    func(name)
}
ordenSu(flecha2, "jsddssda") // una funcion que resive una funcion y que dentro hace la funcion de la otra funcion

// forEach es una funcion que nos sirve para ejecutar bucles asociados a elementos iterables. es una funcion que es capaz de ejecutar una funcion iteradora

myArray = [1, 2, 3, 4]
myArray.forEach((value) => console.log(value))