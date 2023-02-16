const esercizio1 = document.getElementById('concatena');
const esercizio2 = document.getElementById('concatena2');

// Dichiarazioni variabili esercizio 1
var nome = 'Aldo';
let ruolo = 'cliente';
const pgreco = 3.14;

// Dichiarazione const esercizio 1
esercizio1.innerHTML = nome + ', ' + ruolo + ', ' + pgreco;

/////////////////////////////////////////////////////////////

// Dichiarazioni variabili esercizio 2
var completo = nome + ', ' + ruolo + ', ' + pgreco;

// Dichiarazione const esercizio 2
esercizio2.innerHTML = completo;

//////////////////////////////////////////////////////////////
// Esercizio 3
// Pt 1
var nome1 = 'Mario';    // valore di partenza
document.getElementById('var').innerHTML = nome1; // valore di partenza
document.getElementById('final').innerHTML = nome1; // valore di partenza
{
    let nome1 = 'Carla';    // valore modificato solo in gruppo
    document.getElementById('let').innerHTML = nome1; // comando stampa da gruppo
}
// Pt 2
var nome2 = 'Carla'; // valore di partenza
{
    let nome1 = 'Mario';    // valore modificato solo in gruppo
    document.getElementById('let2').innerHTML = nome1;  // comando stampa da gruppo
}
document.getElementById('let3').innerHTML = nome2; // valore di partenza
document.getElementById('final2').innerHTML = nome2; // valore di partenza

//////////////////////////////////////////////////////////////

const iniziale = 15;

//riga1
document.getElementById('iniziale').innerHTML += iniziale;

//riga2
var addizione = iniziale+15;
document.getElementById('valore1').innerHTML += addizione + ', ' + ++addizione;

//riga 3
var sottrazione = iniziale-10;
document.getElementById('valore2').innerHTML += sottrazione + ', ' + --sottrazione;

//riga 4
var moltiplicazione = iniziale * 3;
document.getElementById('valore3').innerHTML += moltiplicazione;

//riga5
var divisione = iniziale / 3;
document.getElementById('valore4').innerHTML += divisione;

//riga 6
const lui = ' è un numero'
document.getElementById('valore5').innerHTML += iniziale + lui;