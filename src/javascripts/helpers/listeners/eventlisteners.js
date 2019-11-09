import $ from 'jquery';
import printP from '../../components/printPins/printPins';
import back from '../../components/backToBoards/backToBoards';
import d from '../../components/deletePins/deletePins';

const listeners = () => {
  $('body').on('click', '.singleBoard', printP.getUserId);
  $('body').on('click', '#goBack', back.backToUsersBoards);
  $('body').on('click', '.deletePinButton', d.deletePinFromBoard);
};

export default { listeners };
