/* eslint-disable no-use-before-define */
import $ from 'jquery';
import pCard from '../pinCard/pinCard';
import pinsData from '../../helpers/data/pinsData';
import utilities from '../../helpers/utilities';
import card from '../boardCard/boardCard';
import b from '../../helpers/data/boardData';
import './buildTheSite.scss';

const backToUsersBoards = () => {
  makeABoard();
};

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
      console.log(pins);
      let domString = '<h2 class="text-center header">My Boards</H2>';
      domString += '<div class="d-flex flex-wrap justify-content-around">';
      pins.forEach((pin) => {
        domString += pCard.printPinCards(pin);
      });
      domString += '</div>';
      domString += '<button class="btn btn-danger" id="goBack">Go back to My Boards</button>';
      utilities.printToDom('board', domString);
      $('body').on('click', '#goBack', backToUsersBoards);
      $('body').on('click', '.deletePinButton', deletePinFromBoard);
    })
    .catch((error) => reject(error));
});

const deletePinFromBoard = (event) => {
  event.preventDefault();
  pinsData.deletePin(event.target.id)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printUserPins();
    })
    .catch((error) => console.error(error));
};

export default { makeABoard, printUserPins, deletePinFromBoard };
