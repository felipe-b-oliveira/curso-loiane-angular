// Javascript puro -----------------------------------
var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
// ES6(2015) -----------------------------------------
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
// Javascript puro -----------------------------------
numeros.map(function (valor) {
    return valor * 2;
});
// ES6(2015) -----------------------------------------
numeros.map(function (valor) { return valor * 2; });
// ES6(2015) -----------------------------------------
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// ES6(2015) -----------------------------------------
var n1 = 'variavel tipada';
n1 = 4;
