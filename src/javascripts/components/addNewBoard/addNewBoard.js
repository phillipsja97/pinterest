import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import boardData from '../../helpers/data/boardData';
import printB from '../printBoards/printBoards';

const addNewBoardByUser = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const newBoard = {
    name: $('#board-name').val(),
    imageUrl: $('#board-image-url').val(),
    description: $('#board-description').val(),
    uid,
  };
  boardData.addNewBoard(newBoard)
    .then(() => {
      $('#addBoardModal').modal('hide');
      printB.makeABoard(uid);
    })
    .catch((error) => console.error(error));
};

export default { addNewBoardByUser };
