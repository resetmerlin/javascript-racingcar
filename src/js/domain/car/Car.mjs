import { CarTemplate, ForwardIcon } from '../../components/index.mjs';

/** Car Domain
 *
 *  1. Responsible for generating random numbers to go
 *  2. Responsible for rendering a car view
 *  3. Responsible for rendering forward icon based on the race length
 */
class Car {
  constructor(count, raceLength, name) {
    this._count = count;
    this._raceLength = raceLength;
    this._name = name;
  }

  /** Generate Random length to go */
  getRandomLength(max = 9) {
    let len = Math.floor(Math.random() * max);
    if (len >= 4) {
      return len;
    } else {
      return false;
    }
  }

  /** Render forward icon based on the random length */
  race() {
    let temp = this.getRandomLength();
    if (temp) {
      this._raceLength += temp;

      document.getElementById(this._name).insertAdjacentHTML(
        'afterEnd',
        new Array(this._raceLength)
          .fill(0)
          .map(x => ForwardIcon())
          .join(''),
      );
    }
  }

  /** Render a Car view  */
  _render() {
    let $gameScren = document.getElementById('game-process-screen');

    $gameScren.insertAdjacentHTML(
      'beforeend',
      CarTemplate({ carName: this._name }),
    );
  }
}

export default Car;
