// TIPOS DE DATOS PRIMITIVOS

// cadenas de texto (String)
let name = 'andres'

// numeros (number)
let age = 19 // entero
let height = 1.77 // decimal

// booleanos (boolean)
let isStudent = false
let isTeacher = true

// undefined (tipo de dato no definido) variables que no tienen valor y no han sida inicializada
let noDefinido
console.log (noDefinido)

// null (variable con valor nulo pero que posiblemente estemos esperando su valor)
let valornulo = null

// symbol (sirven para los objetos) valor unico e inmutable
let mySymbol = Symbol('mysymbol')

//BigInt (se utiliza cuando el numero que querermos utilizar no lo soporta  )
// primera forma para representar un big
let my1BigInt = BigInt(5646664564646466894698468488888888888888888888888888888888888888888888) 

// segunda forma para representar un big
let myBigInt = 64666456464646689469846848888888888888888888888888888888888888888888855n

// mostramos los tipos de datos
console.log (typeof name)
console.log (typeof myBigInt) 