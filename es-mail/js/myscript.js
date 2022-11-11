/*Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// Variabile per l'input
let emailUtente = document.getElementById("email-utente");

// Variabile per il bottone
const myButton = document.getElementById("verifica");

console.log("Email Utente:", emailUtente.value);

// Creo array con le email
const emailInvitati = ["pippo@gmail.com", "pluto@gmail.com", "vale@yahoo.it", "ciaobello@tiscali.it"];

// Calcolo il numero di elementi dell'array
const numInvitati = emailInvitati.length;

myButton.addEventListener("click", 

    function() {

        // Messaggio che appare se l'utente non può accedere
        let messaggio = "Non puoi entrare";

        // Scorro tutto l'array
        for ( let i = 0; i < numInvitati; i++) {
            console.log(`emailInvitati[${i}]`, emailInvitati[i]);

            // Se l'email inserita dall'utente coincide con una presente nell'array
            if (emailUtente.value === emailInvitati[i]) {
                // Messaggio che appare se l'utente può accedere
                messaggio = "Benvenuto";  
            }

            // Assegno il messaggio all'id nell'html
            document.getElementById("messaggio").innerHTML = messaggio;

        }
    }
);