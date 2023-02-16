/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const es1n1 = 17;
const es1n2 = 71;

var trovaMaggiore = (es1n1 > es1n2) ? es1n1 : es1n2;

document.getElementById('esercizio1').innerHTML = 'Il numero maggiore è ' +  trovaMaggiore;
console.log('Il numero maggiore è ' + trovaMaggiore);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const es2n1 = 4;

var equal5 = (es2n1 == 5) ? "equal" : "not equal";

document.getElementById('esercizio2').innerHTML = 'Il numero ' + es2n1 + ' è ' + equal5 + ' al numero 5.';
console.log('Il numero ' + es2n1 + ' è ' + equal5 + ' al numero 5.');

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const es3n1 = 30; //variabile DIVISIBILE
const es3n2 = 29; //variabile NON DIVISIBILE

var div5_1 = (es3n1 % 5 == 0) ? "divisibile per 5" : "non divisibile per 5";
var div5_2 = (es3n2 % 5 == 0) ? "divisibile per 5" : "non divisibile per 5";

document.getElementById('esercizio3_1').innerHTML = 'Il numero ' + es3n1 + ' è ' + div5_1;
document.getElementById('esercizio3_2').innerHTML = 'Il numero ' + es3n2 + ' è ' + div5_2;
console.log('Il numero ' + es3n1 + ' è ' + div5_1);
console.log('Il numero ' + es3n2 + ' è ' + div5_2);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const es4n1 = 5;
const es4n2 = 3;

var otto = (es4n1 == 8 || es4n2 == 8 || es4n1 + es4n2 == 8 || es4n1 - es4n2 == 8 || es4n2 - es4n1 == 8) ? 'verificato' : 'non verificato';

document.getElementById('esercizio4').innerHTML = otto;
console.log(otto);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const spedizione = 10;
var totalShoppingCart = 60;
var totalCost;

if (totalShoppingCart > 50) {
  totalCost = totalShoppingCart;
  document.getElementById('esercizio5').innerHTML = 'Hai diritto alla spedizione gratuita! Il tuo totale è :' + totalCost;
} else {
  totalCost = totalShoppingCart + spedizione;
  document.getElementById('esercizio5').innerHTML = 'Non hai diritto alla spedizione gratuita! Il tuo totale è :' + totalCost;
}
console.log(totalCost);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var sconto = totalShoppingCart * 0.2;
var totalShoppingCartScontato = totalShoppingCart - sconto;

if (totalShoppingCartScontato > 50) {
  totalCost2 = totalShoppingCart;
  document.getElementById('esercizio6').innerHTML = 'Hai diritto alla spedizione gratuita! Il tuo totale è :' + totalCost2;
} else {
  totalCost2 = totalShoppingCartScontato + spedizione;
  document.getElementById('esercizio6').innerHTML = 'Non hai diritto alla spedizione gratuita! Il tuo totale è :' + totalCost2;
}
console.log(totalCost2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var es7n1 = 33;
var es7n2 = 21;
var es7n3 = 28;

var riordiniamo = [es7n1, es7n2, es7n3];

document.getElementById('esercizio7').innerHTML += riordiniamo;
if (es7n1>es7n2 && es7n1>es7n3){
  if (es7n2>es7n3){
    riordiniamo = [es7n3, es7n2, es7n1];
  }else{
    riordiniamo = [es7n2, es7n3, es7n1];
  }
}else if (es7n2>es7n1 && es7n2>es7n3){
  if (es7n1>es7n3){
    riordiniamo = [es7n3, es7n1, es7n2];
  }else{
    riordiniamo = [es7n1, es7n3, es7n2];
  }
}else {
  if (es7n1>es7n2){
    riordiniamo = [es7n2, es7n1, es7n3];
  }else{
    riordiniamo = [es7n1, es7n2, es7n3];
  }
};
document.getElementById('esercizio7_').innerHTML += riordiniamo;
console.log('Es. 7 - ' + 'Dal minore al maggiore: ' + riordiniamo);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const es8n1 = 8;
document.getElementById("es8n1").innerHTML = es8n1;

var numero = (typeof es8n1 == "number") ? "Si" : "No" ;
document.getElementById("esercizio8").innerHTML = numero;

console.log("Es. 8 -" + es8n1 + "è un numero?" + numero)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
