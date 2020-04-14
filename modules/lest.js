const Test = require('./assert');

function expect() {
   new Test("Esperar que 5 sea 5", 5).toBe(5);
   new Test("Esperar que sumar 5 + 5 sea 10", suma(5, 5)).toBe(10);
   new Test("Esperar que sumar hola sea igual a hola", "hola2").toBe("hola");
}

function suma(a, b) {
    return a + b;
}

module.exports = expect;