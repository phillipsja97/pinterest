import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const auth = $('#auth');
const board = $('#board');
const logout = $('#navbar-button-logout');

const logoutEvent = () => {
  logout.click((e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        auth.addClass('hide');
        board.addClass('hide');
        logout.addClass('hide');
      }).catch((err) => console.error('your still logged in', err));
  });
};

export default { logoutEvent };
