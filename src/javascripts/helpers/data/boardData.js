import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const theBoards = response.data;
      const boards = [];
      Object.keys(theBoards).forEach((fbId) => {
        theBoards[fbId].id = fbId;
        boards.push(theBoards[fbId]);
      });
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const deleteBoardfromFirebase = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

export default { getBoards, deleteBoardfromFirebase };
