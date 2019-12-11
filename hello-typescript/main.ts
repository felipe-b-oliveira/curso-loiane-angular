// Javascript puro -----------------------------------
var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
// ES6(2015) -----------------------------------------
let num = 2;
const PI = 3.14;
var numeros = [1, 2, 3];
// Javascript puro -----------------------------------
numeros.map(function(valor) {
    return valor * 2;
});
// ES6(2015) -----------------------------------------
numeros.map(valor => valor * 2);
// ES6(2015) -----------------------------------------
class Matematica {
    soma(x, y) {
        return x + y;
    }
}
// ES6(2015) -----------------------------------------
var n1:any = 'variavel tipada';
n1 = 4;
