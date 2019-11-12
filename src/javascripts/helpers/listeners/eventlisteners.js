import $ from 'jquery';
import printP from '../../components/printPins/printPins';
import back from '../../components/backToBoards/backToBoards';
import d from '../../components/deletePins/deletePins';
import deleteB from '../../components/deleteBoard/deleteBoard';

const listeners = () => {
  $('body').on('click', '.print-pins-button', printP.getUserId);
  $('body').on('click', '#goBack', back.backToUsersBoards);
  $('body').on('click', '.deletePinButton', d.deletePinFromBoard);
  $('body').on('click', '.delete-board-button', deleteB.deleteBoard);
};

export default { listeners };
