/*Palidroma:
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/
var user_word = prompt('enter one word').toUpperCase().toString();

/**
 * #### Rovescia una parola
 * @param {string} word Larola da verificare 
 * @returns {boolean} vero o falso di una parola palindroma
 */

function polindroma(word) {

    var reversed = word.toUpperCase().split('').reverse().join('');
    if (reversed === word) {
        return true; //console.log(word + ', è una parola polindroma');
    } else {
        return false; //console.log(word + ', NON è una parola polindroma');
    }
}

console.log(user_word);
console.log(polindroma(user_word));


// seconda versione 
function reverse_word(word) {

    var rev_word = '';
    for (var i = word.length - 1; i >= 0; i--) {
        rev_word += word[i];
    }
    return rev_word;
}
console.log(reverse_word(user_word));