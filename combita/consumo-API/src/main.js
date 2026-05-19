import { traerData } from "./services/platzi.service"

const btn = document.getElementById('btn')  


// btn.addEventListener('click', click) // callback funcion que se pasa como parametro a otra funcion, si la funtion tiene que recibir parametro se hace una funcion flecha

// function click() {
//     alert('hclick')
// }

// // promesas
// const promesa = new Promise((resolve, reject) => {
//     let age = Number(promt('ingrese su edad'))

//     if (age >= 18) {
//         resolve('puedes seguir')
//     } else {
//         reject('no puedes seguir')
//     }
// })
// promesa.then().finally().catch()

btn.addEventListener('click', traerData)


