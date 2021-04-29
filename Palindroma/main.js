/*Palidroma:
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/
var user_word = prompt('enter one word').toUpperCase().toString();

console.log(user_word);


function polindroma(word) {

    var reversed = word.toUpperCase().split('').reverse().join('');
    if (reversed === word) {
        return console.log('sono polindrome');
    } else {
        return console.log('NON sono polindrome');
    }

}
polindroma(user_word);

