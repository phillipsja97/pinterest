import utilities from '../../helpers/utilities';
import card from '../boardCard/boardCard';
import b from '../../helpers/data/boardData';
import './board.scss';

const makeABoard = (uid) => {
  b.getBoards(uid)
    .then((boards) => {
      console.log(boards);
      let domString = '<h2>BOARDS</H2>';
      domString += '<div class="d-flex flex-wrap">';
      domString += '<div class="col-4">';
      boards.forEach((board) => {
        domString += card.boardCard(board);
        console.log(card.boardCard(board));
      });
      domString += '</div>';
      console.log(domString);
      utilities.printToDom('board', domString);
    })
    .catch((error) => console.error(error));
};

export default { makeABoard };
