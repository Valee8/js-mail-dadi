/*Gioco dei dadi:
Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Numero giocatore da 1 a 6
const numGiocatore = Math.floor(Math.random() * 6) + 1;

// Numero computer da 1 a 6
const numComputer = Math.floor(Math.random() * 6) + 1;

console.log("Numero giocatore: ", numGiocatore);

console.log("Numero computer: ", numComputer);

// Variabile che contiene il risultato
let risultato = "Pareggio";

// Controllo chi ha vinto
if (numComputer > numGiocatore) {
    risultato = "Ha vinto il computer";
}
else if (numGiocatore > numComputer) {
    risultato = "Ha vinto il giocatore";
}

// Stampo il risultato
document.getElementById("risultato").innerHTML = risultato;