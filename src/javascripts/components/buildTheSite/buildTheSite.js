/* eslint-disable no-use-before-define */
import $ from 'jquery';
import pCard from '../pinCard/pinCard';
import pinsData from '../../helpers/data/pinsData';
import utilities from '../../helpers/utilities';
import card from '../boardCard/boardCard';
import b from '../../helpers/data/boardData';
import './buildTheSite.scss';

const makeABoard = (uid) => {
  b.getBoards(uid)
    .then((boards) => {
      let domString = '<h2 class="text-center header">BOARDS</H2>';
      domString += '<div class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += card.boardCard(board);
      });
      domString += '</div>';
      utilities.printToDom('board', domString);
      $('body').on('click', '.singleBoard', printUserPins);
    })
    .catch((error) => console.error(error));
};

const printUserPins = (event) => new Promise((resolve, reject) => {
  const boardId = event.target.id;
  pinsData.getPinsByBoardId(boardId)
    .then((pins) => {
      let domString = '<h2 class="text-center header">My Boards</H2>';
      domString += '<div class="d-flex flex-wrap justify-content-around">';
      pins.forEach((pin) => {
        domString += pCard.printPinCards(pin);
      });
      domString += '</div>';
      utilities.printToDom('board', domString);
    })
    .catch((error) => reject(error));
});

export default { makeABoard, printUserPins };
