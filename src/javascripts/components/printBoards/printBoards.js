import utilities from '../../helpers/utilities';
import card from '../boardCard/boardCard';
import b from '../../helpers/data/boardData';
import './printBoards.scss';

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
    })
    .catch((error) => console.error(error));
};

export default { makeABoard };
