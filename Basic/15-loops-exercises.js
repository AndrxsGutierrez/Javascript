

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (i = 0; i < 20; i++){
    console.log(i+1)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0

for (i = 1; i <=100; i++){
    suma += i
}
console.log(suma)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (i = 2; i <=50; i += 2) {
    console.log(i)
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ['andres', 'camilo', 'gutierrez', 'ospino']

for (let i of nombres) {
    console.log(i)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let name = 'Gutierrez'
let number = 0

for (let i of name) {
    number += 1
}
console.log(`El numero de letras que tiene su nombre es de ${number}`)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [4, 5, 5, 6]
let multi = 1

for (let i of numeros) {
    multi *= i
}
console.log(multi)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (i = 5; i <= 50; i += 5){
    console.log(i)
}

// 8. Usa un bucle para invertir una cadena de texto
let texto = "hola";
let invertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i]
}
console.log(invertido);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0
let b = 1

for (let i = 0; i <= 10; i++) {
    console.log(a)

    let temp = a + b

    a = b
    b = temp
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let otro = [4, 5, 5, 6, 25, 10, 11, 48, 5, 9]
console.log('hola perra')
for (let i of otro) {
    if (i >= 10) {
        console.log(i)
    } else {
        continue
    }
}