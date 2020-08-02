/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import read from './reader.js';
import json from './parser.js';

class GameSavingLoader {
  load() {
    return new Promise((resolve) => {
      resolve(read());
    }).then((data) => json(data)).then((str) => {
      const GameSaving = JSON.parse(str);
      return GameSaving;
    });
  }
}

export default GameSavingLoader;
