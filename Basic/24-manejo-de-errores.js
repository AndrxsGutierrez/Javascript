// Manejo de errores
let myObject
// console.log(myObject.email);

// capturar de errores

// try-catch

try {
    // codigo que inteta ejecutar
    console.log(myObject.email)
    console.log("no imprime");
} catch {
    console.log("\nhubo un error");
    
}

// captrar error
try {
    // codigo que inteta ejecutar
    console.log(myObject.email)
    console.log("no imprime");
} catch (error) {
    console.log("\nhubo un error", error.console);
    
}

// finally 
try {
    // codigo que inteta ejecutar
    console.log(myObject.email)
    console.log("no imprime");
} catch (error) {
    console.log("\nhubo un error", error.console);
    
} finally{ // pero si o si siemore que siempre se ejecuta no importa que pase
    console.log('siempre se ejecuta');
}

// lanzamiento de errores

// throw es para lanzar errores uno mismo por consola

function sum(a, b) {
    if (Number.isInteger(a) || Number.isInteger(b)) {
        return 'Estos numeros no son enteros, no se pueden sumar'
    } else {
        return a + b
    }
}

console.log(sum("d", 5));

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

// Capturar varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}

