/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/

var myself = "Massimiliano";
console.log(myself);

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla'];
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/

pets.unshift('capibara');
console.log(pets);


/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
pets.shift();
console.log(pets);

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const shifted = pets.shift();
pets.push(shifted);
console.log(pets);

/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/

for (let i = 0; i < pets.length ; i++) {
    if (pets[i][0] === "c") {
        console.log(true)
    } else {
        console.log(false)
    }
}

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const licensePlates = ['AS893PB', 'DG534JF', 'DL744XN']

for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = licensePlates[i];
}

console.log(cars);

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

function newCar(brand, model, color, trims) {
    const addedCar = { brand, model, color, trims };
    cars.push(addedCar)
    return cars.length;
}

const newLength = newCar('Fiat', '500', 'gold', ['comfy', 'sporty']);
console.log(newLength);
console.log(cars);

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = []
// inserisci la tua funzione qui
function saveFirstTrims() {
    for (let i = 0 ; i < cars.length ; i++) {
        justFirstTrims.push(cars[i].trims[0]);
    }
}

saveFirstTrims();
console.log(justFirstTrims);

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
for (let i = 0 ; i < cars.length ; i++) {
    if (cars[i].color.length <= 4) {
    console.log("Fizz")
}
    else {
        console.log("Buzz")
    } 
}

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/

const trimsCounter = cars.filter(function(car) {
    return car.trims.length > 2;
  });
  
  console.log(trimsCounter);

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/

const carsDescription = cars.map(function(car) {
    return car.brand + ' ' + car.model;
});

console.log(carsDescription);

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
let arrayNumeric = "";
while (i < numericArray.length && numericArray[i] !== 32) {
    arrayNumeric += numericArray[i] + ", ";
    console.log(arrayNumeric);
    console.log(numericArray[i]);
    i++;
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const positionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i];
  const index = alfabeto.indexOf(character);

  switch(index) {
    case 0:
      positionsArray.push(1);
      break;
    case 1:
      positionsArray.push(2);
      break;
    case 2:
      positionsArray.push(3);
      break;
    case 3:
      positionsArray.push(4);
      break;
    case 4:
      positionsArray.push(5);
      break;
    case 5:
      positionsArray.push(6);
      break;
    case 6:
      positionsArray.push(7);
      break;
    case 7:
      positionsArray.push(8);
      break;
    case 8:
      positionsArray.push(9);
      break;
    case 9:
      positionsArray.push(10);
      break;
    case 10:
      positionsArray.push(11);
      break;
    case 11:
      positionsArray.push(12);
      break;
    case 12:
      positionsArray.push(13);
      break;
    case 13:
      positionsArray.push(14);
      break;
    case 14:
      positionsArray.push(15);
      break;
    case 15:
      positionsArray.push(16);
      break;
    case 16:
      positionsArray.push(17);
      break;
    case 17:
      positionsArray.push(18);
      break;
    case 18:
      positionsArray.push(19);
      break;
    case 19:
      positionsArray.push(20);
      break;
    case 20:
      positionsArray.push(21);
      break;
    case 21:
      positionsArray.push(22);
      break;
    case 22:
      positionsArray.push(23);
      break;
    case 23:
      positionsArray.push(24);
      break;
    case 24:
      positionsArray.push(25);
      break;
    case 25:
      positionsArray.push(26);
      break;
    default:
      positionsArray.push(null);
      break;
  }
}

console.log(positionsArray);