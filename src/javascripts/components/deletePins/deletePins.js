import $ from 'jquery';
import printB from '../printBoards/printBoards';
import pinsData from '../../helpers/data/pinsData';
import pCard from '../printPins/printPins';

const backToUsersBoards = () => {
  printB.makeABoard();
};

const deletePinFromBoard = (event) => {
  event.preventDefault();
  const pinId = event.target.id;
  const boardId = $(event.target).closest('.pinContainer').attr('id');
  pinsData.deletePin(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      pCard.printUserPins(boardId);
    })
    .catch((error) => console.error(error));
};

export default { backToUsersBoards, deletePinFromBoard };
