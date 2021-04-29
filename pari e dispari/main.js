// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var scelta_utente = prompt('scegli vero o falso').toString().toLowerCase();
var numero_utente = Number(prompt('scegli un numero da da 1 a 5'));
var numero_random = generaNumero();

function generaNumero() {
    var numeroPC = Number(Math.floor(Math.random() * 5));
    return numeroPC;
}

var risultato = numero_utente + numero_random;

function isEven(num) {
    if (num % 2 === 0) {

        return true;
    }
}

if (isEven(risultato)) {
    risultato = 'pari';
} else {
    risultato = 'dispari'
}

if (risultato = 'pari' && scelta_utente === 'pari') {
    console.log("hai vinto!");
} else if (risultato = 'dispari' && scelta_utente === 'dispari') {
    console.log("hai vinto!");
} else {
    console.log("Ritenta");
}

console.log(scelta_utente);
console.log(numero_utente);
console.log(numero_random);

