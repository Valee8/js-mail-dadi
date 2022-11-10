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

if (numComputer > numGiocatore) {
    document.getElementById("risultato").innerHTML = "Ha vinto il computer";
}
else if (numGiocatore > numComputer) {
    document.getElementById("risultato").innerHTML = "Ha vinto il giocatore";
}
else {
    document.getElementById("risultato").innerHTML = "Pareggio";
}
