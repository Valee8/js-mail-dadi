/*Gioco dei dadi:
Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const buttonPlay = document.getElementById("lancio-dadi");

// Numero giocatore da 1 a 6
const numGiocatore = Math.floor(Math.random() * 6) + 1;

// Numero computer da 1 a 6
const numComputer = Math.floor(Math.random() * 6) + 1;

buttonPlay.addEventListener("click",

    function() {

        console.log("Numero giocatore: ", numGiocatore);

        console.log("Numero computer: ", numComputer);

        // Variabile che contiene il risultato
        let vincitore = "Pareggio";

        // Controllo chi ha vinto
        if (numComputer > numGiocatore) {
            vincitore = "Ha vinto il computer";
        }
        else if (numGiocatore > numComputer) {
            vincitore = "Ha vinto il giocatore";
        }

        // Stampo il risultato
        document.getElementById("dado-giocatore").innerHTML = `Il giocatore ha ottenuto ${numGiocatore}`;

        document.getElementById("dado-computer").innerHTML = `Il computer ha ottenuto ${numComputer}`;

        document.getElementById("vincitore").innerHTML = vincitore;
    }

);