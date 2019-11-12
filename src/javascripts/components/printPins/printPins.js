/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import $ from 'jquery';
import pinsData from '../../helpers/data/pinsData';
import pCard from '../pinCard/pinCard';
import utilities from '../../helpers/utilities';

const getUserId = (event) => {
  const boardId = event.target.id;
  printUserPins(boardId);
};

const printUserPins = (boardId) => new Promise((resolve, reject) => {
  pinsData.getPinsByBoardId(boardId)
    .then((pins) => {
      console.log(pins);
      let domString = '<h2 class="text-center header">My Boards</H2>';
      domString += `<div class="d-flex flex-wrap justify-content-around pinContainer" id="${boardId}">`;
      pins.forEach((pin) => {
        domString += pCard.printPinCards(pin);
      });
      domString += '</div>';
      domString += '<button class="btn btn-danger" id="goBack">Go back to My Boards</button>';
      utilities.printToDom('pins', domString);
      $('#board').addClass('hide');
    })
    .catch((error) => reject(error));
});

export default { printUserPins, getUserId };
