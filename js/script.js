// SCOPO FINALE: calcolo del prezzo del biglietto del treno sulla base di 2 requisiti: età + km da percorrere

// --------STEP 1--------- //
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// 1. CREARE DUE PROMPT CONST ALL'AVVIO CON RICHIESTA ETA' E KM DA VOLER PERCORRERE AGGIUNGENDO ANCHE IL PARSEINT.

const yourAge = parseInt(prompt('Quanti anni hai?'));
const yourKm = parseInt(prompt('Quanti km vuoi percorrere?'));


// --------STEP 2--------- //
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km).
// 2. CREARE VARIABILE CHE DEFINISCE IL PREZZO DEL BIGLIETTO IN BASE AL PREZZO IN KM NEL RANGE INDICATO.

const kmPrice = 0.21;

// moltiplico kmPrice x YourKm per definire costo passeggero//

let personalTotalPrice = kmPrice * yourKm;


// --------STEP 3--------- //
// va applicato uno sconto del 20% per i minorenni e uno sconto del 40% per gli over 65.
// 3. CREO LE DUE COSTANTI SCONTO: 40% E 20%. 

let saleTwenty = personalTotalPrice * 0.2;
let saleForty = personalTotalPrice * 0.4;

// --------STEP 4-5--------- //
// 4. STAMPARE I DATI RELATIVI AL BIGLIETTO (CON SCONTO ETA') NEL DOM.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo.
// 5. USO TO.FIXED CON VALORE 2 //

const outputHtml = document.getElementById('personalTotalPrice');
const button = document.getElementById('button-box');


// 6. CREO ISTRUZ. CONDIZIONALI E AGGIUNGO VALORI CHE DEFINISCONO GLI SCONTI, DA AGGIUNGERE AL PREZZO TOT FINALE IN BASE ALL'ETA'.
// 7. AGGIUNGO ANCHE EVENT LISTENER  //

button.addEventListener('click', function () {
    
    if (yourAge <= 18)  {
        outputHtml.innerHTML = "Il prezzo del tuo biglietto è: " + (personalTotalPrice.toFixed(2) - saleTwenty) + "€";
    } else if (yourAge >= 65) {
        outputHtml.innerHTML = "Il prezzo del tuo biglietto è: " + (personalTotalPrice.toFixed(2) - saleForty) + "€";
    } else {
        outputHtml.innerHTML = "Il prezzo del tuo biglietto è: " + personalTotalPrice.toFixed(2) + " €" ;
    }
})

