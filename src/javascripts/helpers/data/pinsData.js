import axios from 'axios';
import apikeys from '../apiKeys.json';

const baseUrl = apikeys.firebaseConfig.databaseURL;

// basically need to take this by uid instead of boardId, no smash function. BoardId will be used for when you click on
// the board. display boards by uid, pins by boardId. BoardsData will export to board.js. pinsData will go to pins.js

const getPins = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const thePins = response.data;
      const pins = [];
      Object.keys(thePins).forEach((fbId) => {
        thePins[fbId].id = fbId;
        pins.push(thePins[fbId]);
      });
      resolve(pins);
      console.log(pins);
    })
    .catch((error) => reject(error));
});

export default { getPins };
