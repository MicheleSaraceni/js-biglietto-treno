/* Ciao ragazzi,
esercizio di oggi: Biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Buon lavoro! */

const priceKm = 0.21;
console.log ("Benvenuti sul nostri treno, la informiamo che la tariffa per viaggiare sulle nostre tratte è di: " + priceKm + " al km.");

const juniorDiscount = 20;
const juniorAge = 18;
console.log ("Lo sconto del " + juniorDiscount + "% è applicato a tutti i biglietti acquistati da persone con un età inferiore ai " + juniorAge + "anni di età.");

const seniorDiscount = 40;
const seniorAge = 65;
console.log ("Lo sconto del " + seniorDiscount + "% è applicato a tutti i biglietti acquistati da persone con un età uguale o superiore ai " + seniorAge + "anni di età.");

const km = parseInt(prompt("Per acquistare un biglietto inserisca di seguito la lunghezza della tratta che deve percorre in km."));
console.log ("La tratta che deve percorre è di " + km + "km");



