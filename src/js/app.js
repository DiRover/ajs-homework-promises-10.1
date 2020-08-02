/* eslint-disable import/extensions */
/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader.js';

const app = new GameSavingLoader();
app.load().then((saving) => saving, (error) => {
  console.error(error);
});

export default app;
