import axios from 'axios';
import apikeys from '../apiKeys.json';

const baseUrl = apikeys.firebaseConfig.databaseURL;

const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
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
