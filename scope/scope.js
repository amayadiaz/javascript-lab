import printMessageModule from "./scope-module.js";

// Global Scope
// Function Scope 
// Block Scope 
// Module Scope 

// A la fecha con ES6 la mejor práctica es usar CONST y LET 

var a = 1; 
var b = 2;

if(a === 1){
    let a = 3;
    var b = 4; 
    var c = 5; // Está en un bloque pero se puede usar en el Scope Global
    let d = 6; // Está en un bloque y no se puede usar en el Scope Global 

    console.log('Scope Block IF');
    console.log(a);
    console.log(b);
    
}

console.log('Scope Global');

console.log(a);
console.log(b);
console.log(c);

try{
    console.log(d);
}catch(error){
    console.log(error);
}


console.log('Scope Function');

var f = 8;
let g = 9;

function printNumbers() {
    var e = 7; // Está dentro del scope de la función por lo que solo puede usarse por dentro de la misma
    console.log(e);
    f = 20;
    g = 30;
}

printNumbers();

try{
    console.log(e);
}catch(error){
    console.log(error);
}

console.log(f);
console.log(g);


console.log('Scope Module');
printMessageModule();










