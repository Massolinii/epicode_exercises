// ESERCIZIO 1
class UserMaker {
    constructor(_firstName, _lastName, _age, _location) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
        this._location = _location;
    }
    greet() {
        return "Buongiorno, sono " + this._firstName + " " + this._lastName + " ed ho " + this._age + " anni";
    }
    comparer(refUser) {
        if (this._age > refUser._age) {
            return `${this._firstName} ${this._lastName} è più vecchio di ${refUser._firstName} ${refUser._lastName}`;
        } else if (this._age < refUser._age) {
            return `${this._firstName} ${this._lastName} è più giovane di ${refUser._firstName} ${refUser._lastName}`;
        } else {
            return `${this._firstName} ${this._lastName} ha la stessa età di ${refUser._firstName} ${refUser._lastName}`;
        }
}
}

const mario = new UserMaker('Mario', 'Scavalcacinghie', "22", 'Foggia');
const giorgio = new UserMaker('Giorgio', 'Scavalcacinghie', "27", 'Bari');

console.log(mario.greet())
console.log(giorgio.greet())

console.log(mario.comparer(giorgio));

// ESERCIZIO 2 

class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
    sameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

  const petForm = document.getElementById('pet-form');
  const petListElement = document.getElementById('pet-list');
  const petList = [];

  petForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const petName = document.getElementById('pet-name').value;
    const ownerName = document.getElementById('owner-name').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
  
    const newPet = new Pet(petName, ownerName, species, breed);
  
    petList.push(newPet);

    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${newPet.petName} - Specie: ${newPet.species} - Razza: ${newPet.breed} - Proprietario: ${newPet.ownerName}`;
    petListElement.appendChild(listItem);

    let sameOwner = false;
  
    for (let i = 0; i < petList.length; i++) {
      for (let j = i + 1; j < petList.length; j++) {
        if (petList[i].ownerName === petList[j].ownerName) {
          sameOwner = true;
          break;
        }
      }
      if (sameOwner) {
        break;
      }
    }
  
    console.log(sameOwner);
  });