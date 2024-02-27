//console.log('Funziona');

/*

-  Chiediamo all'utente di inserire una parola attraverso un prompt e salviamo il valore in una variabile
- Confrontiamo la parola con la sua forma contraria e SE la parola dovesse essere === significa che la nostra parola è palindroma
- Creiamo la nostra funzione

*/

const userWord = prompt('Inserisci qui la tua parola per vedere se è Palindroma')

/*
console.log(userWord);

let splitUserWord = userWord.split('');
console.log(splitUserWord);

let reverseUserWord = splitUserWord.reverse().join('')

console.log(reverseUserWord);

*/


/**
 * Controlla se la tua parola è palindroma
 * @param {string} userWord 
 * @returns {string}
 */
function checkWordPalindroma(userWord) {
    let reverseUserWord = userWord.split('').reverse().join('')
    if (reverseUserWord === userWord) {
        return alert('wow la tua parola è palindroma')
    }  else {return alert('mi dispiace ma la tua parola non è palindroma')}
}
//console.log(checkWordPalindroma(userWord));

/*
if (checkWordPalindroma(userWord) === userWord) {
    alert('wow la tua parola è palindroma')
} else {alert('mi dispiace ma la tua parola non è palindroma')}

*/

checkWordPalindroma(userWord)