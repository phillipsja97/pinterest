import boardData from '../../helpers/data/boardData';
import printB from '../printBoards/printBoards';

const deleteBoard = (event) => {
  const boardId = event.target.id;
  boardData.deleteBoardfromFirebase(boardId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printB.makeABoard();
    })
    .catch((error) => console.error(error));
};

export default { deleteBoard };
