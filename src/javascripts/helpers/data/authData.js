import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import build from '../../components/printBoards/printBoards';

const authDiv = $('#auth');
const board = $('#board');
const logout = $('#navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      board.removeClass('hide');
      logout.removeClass('hide');
      authDiv.addClass('hide');
      build.makeABoard();
    } else {
      board.addClass('hide');
      logout.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
