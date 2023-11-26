import { showElement } from '../../utils/elements.js';
import { Car } from '../index.mjs';

class Game {
  parking = [];
  raceLength = 0;
  count = 0;

  renderCars() {
    this.parking.forEach(car => car._render());
  }

  raceCars() {
    for (let i = 0; i < this.count; i++) {
      this.parking.forEach(car => car.race());
    }
  }

  getWinner() {
    // Get a longest race length
    let str = '';
    let longestRace = Math.max(...this.parking.map(car => car._raceLength));
    let winner = this.parking.filter(car => car._raceLength === longestRace);

    winner.forEach(car => {
      if (str.length !== 0) {
        str += ', ' + car._name;
      } else {
        str += car._name;
      }
    });

    return str;
  }

  gameStart() {
    showElement(document.getElementById('game-process-section'));
    this.renderCars();
    this.raceCars();
    const winner = this.getWinner();
    showElement(document.getElementById('game-result-section'));

    console.log(winner);

    // Show winner's name
    document.getElementById('game-result-text').innerHTML = winner;
  }

  putNamesOnParking() {
    const $carNames = document.getElementById('carName').value;
    const carNameLists = $carNames.split(',');

    carNameLists.forEach(weirdName => {
      let name = weirdName.trim();
      this.parking.push(name);
    });
  }

  resetParking() {
    this.parking = [];
    this.raceLength = 0;
  }

  putToParking() {
    this.resetParking();
    this.putNamesOnParking();

    this.parking = this.parking.map(
      name => new Car(this.count, this.raceLength, name),
    );

    showElement(document.getElementById('try-count-form'));
  }

  setCountToStart() {
    const $countTried = document.getElementById('countTried').value;
    this.count = $countTried;
    this.gameStart();
  }

  addCountEvents() {
    document
      .querySelector('.try-count-btn')
      .addEventListener('click', this.setCountToStart.bind(this));
  }
  addNameEvents() {
    document
      .querySelector('.car-name-btn')
      .addEventListener('click', this.putToParking.bind(this));
  }
}

export default Game;
