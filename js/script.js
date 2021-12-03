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

let kmPrice = 0.21;

// moltiplico kmPrice x YourKm per definire costo passeggero//

let personalTotalPrice = kmPrice * yourKm;


// --------STEP 3--------- //
// va applicato uno sconto del 20% per i minorenni
// 3. CREO ISTRUZ. CONDIZIONALE CHE DEFINISCE SCONTO MINORENNI CON IF E ELSE, DA AGGIUNGERE AL PREZZO TOT FINALE IN BASE ALL'ETA'.

// --------STEP 4--------- //
// va applicato uno sconto del 40% per gli over 65.
// 4. ALL'ISTRUZ. CONDIZIONALE PRECEDENTE (STEP 3) AGGIUNGO VALORI CHE DEFINISCONO SCONTO OVER 65, DA AGGIUNGERE AL PREZZO TOT FINALE IN BASE ALL'ETA'.

// --------STEP 5--------- //
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo
// 5. !!! CERCARE !!!

// --------STEP 6--------- //
// 6. STAMPARE I DATI RELATIVI AL BIGLIETTO (CON SCONTO ETA') NEL DOM.
const outputHtml = document.getElementById('personalTotalPrice');
htmlElement.innerHTML = `${personalTotalPrice}`;