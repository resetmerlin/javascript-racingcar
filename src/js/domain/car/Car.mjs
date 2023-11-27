import { CarTemplate } from '../../components/index.mjs';
import { Forward } from '../index.mjs';

class Car extends Forward {
  constructor(count, raceLength, name) {
    super();
    this._count = count;
    this._raceLength = raceLength;
    this._name = name;
  }

  getRandomLength(max = 9) {
    let len = Math.floor(Math.random() * max);
    if (len >= 4) {
      return len;
    } else {
      return false;
    }
  }

  race() {
    let temp = this.getRandomLength();
    if (temp) {
      this._raceLength += temp;

      document.getElementById(this._name).insertAdjacentHTML(
        'afterEnd',
        new Array(this._raceLength).fill(0).map(x => super._render()),
      );
    }
  }

  _render() {
    let $gameScren = document.getElementById('game-process-screen');

    $gameScren.insertAdjacentHTML(
      'beforeend',
      CarTemplate({ carName: this._name }),
    );
  }
}

export default Car;
