// STEP 1 - Chiedere all'utente il suo nome 
const userName = prompt('Inserisci il tuo nome');
// Controllo input
console.log(userName)

// STEP 2 - chiedere il suo cognome
const userNickname = prompt('Inserisci il tuo cognome')
console.log(userNickname)

// STEP 3 - chiedere il colore preferito
const favColor = prompt('Inserisci il tuo colore preferito')
console.log(favColor)

// STEP 4 - stampare in console il nome, cognome, colore preferito ed il numero 21 senza spazi
const result = (userName + userNickname + favColor + 21)

console.log(result)

// BONUS - stampare in pagina il risultato
const ris = document.getElementById('ris');
console.log(ris)
ris.innerText = result 