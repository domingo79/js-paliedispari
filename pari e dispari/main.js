/**********************
*   Pari e Dispari:
***********************/

//1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta_utente = prompt('scegli vero o falso').toString().toLowerCase();
var numero_utente = Number(prompt('scegli un numero da da 1 a 5'));

//2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
/**
 * ### FUNZIONE --Genera numero random con parametri min(numero) e max(numero)--
 * @param {numero minimo} min numero incluso
 * @param {numero massimo} max numero incluso
 * @returns {numero} ritorna un numero random tra min(num) e max (num)
 */
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numero_random = RandomNumber(1, 5);

//3. Sommiamo i due numeri
var risultato = numero_utente + numero_random;

//.4  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
/**
 * ### FUNZIONE Pari o dispari
 * @param {number} numeri
 * @returns valore booleano true o false
 */
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
var checkWinLose = isEven(risultato);
// 5. Dichiariamo chi ha vinto.
if (checkWinLose === true && scelta_utente === 'vero') {
    console.log('User  Win!!');
} else if (checkWinLose === true && scelta_utente !== 'vero') {
    console.log('User  Win!!');
} else {
    console.log('PC Win!! Try again..');
}



