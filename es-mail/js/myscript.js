/*Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// Chiedo all'utente di inserire la sua email
const emailUtente = prompt("Inserisci la tua email");

console.log("Email Utente:", emailUtente);

// Creo array con le email
const emailInvitati = ["pippo@gmail.com", "pluto@gmail.com", "vale@yahoo.it", "ciaobello@tiscali.it"];

// Messaggio che appare se l'utente non può accedere
let messaggio = "Non puoi accedere";

// Calcolo il numero di elementi dell'array
const numInvitati = emailInvitati.length;

// Scorro tutto l'array
for ( let i = 0; i < numInvitati; i++) {
    console.log(`emailInvitati[${i}]`, emailInvitati[i]);

    // Se l'email inserita dall'utente coincide con una presente nell'array
    if (emailUtente === emailInvitati[i]) {
        // Messaggio che appare se l'utente può accedere
        messaggio = "Benvenuto";  
    }

    // Assegno il messaggio all'id nell'html
    document.getElementById("messaggio").innerHTML = messaggio;

}