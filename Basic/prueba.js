setTimeout( () => {
    console.log('primera tarea completada');

    setTimeout(() => {
        console.log('segunda tarea completada');
    }, 1000)
}, 1000)

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesa resueltjjjja'), 1000)
})

promise.then(result => console.log(result))

async function name() {
    return 'data obtenida'
}
name().then(console.log)

async function fetchData() {
    let result = await promise
    console.log(result);
    
}

fetchData()



function sumarMatriz(matriz) {
  let total = 0;
  // Tu código aquí
  for (const num of matriz) {
    for (const nums of num) {
        total += nums;
    }
  }
  return total;
}

console.log(sumarMatriz([[1, 2], [3, 4]]))

function contarFrecuencia(lista) {
  const contador = {};
  // Tu código aquí
  for (const element of lista) {
    if (!contador[element]){
        contador[element] = 1
    } else {
        contador[element] += 1
    }
  }
  console.log(contador);
  return contador;
}



contarFrecuencia(["a", "b", "a"])

const multiplicar = (a, b) => {return a * b}

console.log(multiplicar(5, 5));

function primeraFruta() {
  // Declara el array y retorna el índice 0
  let frutas = ["Manzana", "Banana", "Pera"]
  return frutas[0]
}

console.log(primeraFruta());
