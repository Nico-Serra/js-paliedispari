//console.log('hello world');


/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/
let userChoice = confirm('Per poter vincere vuoi che il tuo numero sia pari?')
//console.log(userChoice);

let userNumber = Number(prompt('Inserisci un numero da 1 a 5'))
//console.log(userNumber);


/**
 * Crea un numero random che abbia un valore compreso tra min max
 * @param {number} min 
 * @param {number} max 
 */
function makeRandomNumber(min, max) {
    return Math.floor(Math.random()*5)+1
}

const randomNumber = makeRandomNumber(1,5)

//console.log(randomNumber);

const pcNumber = makeRandomNumber(1,5)

//console.log(pcNumber);

const sumUser = userNumber + randomNumber

//console.log(sumUser);

const sumPc = pcNumber + randomNumber

//console.log(sumPc);

//  if (userChoice === true && sumUser % 2 === 0) {
//      alert(`Complimenti hai vinto il tuo numero è pari ${sumUser}`)
//  } else if (userChoice === false && sumUser % 2 === 1) {
//     alert(`Complimenti hai vinto il tuo numero è dispari ${sumUser}`)
//  } else {alert(`Mi dispiace hai perso il tuo numero non è cio che hai scelto`)}
//console.log(userChoice === false && sumUser % 2 === 1);
/**
 * Controlliamo se la somma sia pari o dispari
 * @param {Number} sumUser 
 * @returns 
 */
function sumIsEven(sumUser) {
    if (userChoice === true && sumUser % 2 === 0) {
     return alert(`Complimenti hai vinto il tuo numero è pari ${sumUser}`)
 } else if (userChoice === false && sumUser % 2 === 1) {
    return alert(`Complimenti hai vinto il tuo numero è dispari ${sumUser}`)
 } else { return alert(`Mi dispiace hai perso il tuo numero non è cio che hai scelto`)}
}

sumIsEven(sumUser)