// SCOPO FINALE: calcolo del prezzo del biglietto del treno sulla base di 2 requisiti: età + km da percorrere

// --------STEP 1--------- //
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// 1. CREARE DUE PROMPT CONST ALL'AVVIO CON RICHIESTA ETA' E KM DA VOLER PERCORRERE.

const yourAge = prompt('Quanti anni hai?');
const yourKm = prompt('Quanti km vuoi percorrere?');


// --------STEP 2--------- //
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km).
// 2. CREARE VARIABILE CHE DEFINISCE IL PREZZO DEL BIGLIETTO IN BASE AL PREZZO IN KM NEL RANGE INDICATO.

const kmPrice = 0.21;

// moltiplico kmPrice x YourKm per definire costo passeggero//

let personalTotalPrice = kmPrice * yourKm;

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo.
// USO TO.FIXED CON VALORE 2 //
personalTotalPrice = personalTotalPrice.toFixed(2);

// --------STEP 3--------- //
// va applicato uno sconto del 20% per i minorenni e uno sconto del 40% per gli over 65.
// 3. CREO LE DUE COSTANTI SCONTO: 40% E 20%. 

let saleTwenty = personalTotalPrice * 0.2;
let saleForty = personalTotalPrice * 0.4;

// --------STEP 4-5--------- //
// 4. STAMPARE I DATI RELATIVI AL BIGLIETTO (CON SCONTO ETA') NEL DOM.
// 5. CREO ISTRUZ. CONDIZIONALI E AGGIUNGO VALORI CHE DEFINISCONO GLI SCONTI, DA AGGIUNGERE AL PREZZO TOT FINALE IN BASE ALL'ETA'.

const outputHtml = document.getElementById('personalTotalPrice');

if (yourAge <= 18)  {
    outputHtml.innerHTML = "Il prezzo del tuo biglietto è: " + (personalTotalPrice - saleTwenty) + "€";
} else if (yourAge > 65) {
    outputHtml.innerHTML = "Il prezzo del tuo biglietto è: " + (personalTotalPrice - saleForty) + "€";
} else {
    outputHtml.innerHTML = "Il prezzo del tuo biglietto è: " + personalTotalPrice + " €" ;
}
    