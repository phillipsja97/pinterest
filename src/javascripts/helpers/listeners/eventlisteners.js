import $ from 'jquery';
import printP from '../../components/printPins/printPins';
import back from '../../components/backToBoards/backToBoards';
import d from '../../components/deletePins/deletePins';
import deleteB from '../../components/deleteBoard/deleteBoard';
import add from '../../components/addNewPin/addNewPin';

const listeners = () => {
  $('body').on('click', '.print-pins-button', printP.getUserId);
  $('body').on('click', '#goBack', back.backToUsersBoards);
  $('body').on('click', '.deletePinButton', d.deletePinFromBoardByPinId);
  $('body').on('click', '.delete-board-button', deleteB.deleteBoardByBoardId);
  $('#add-new-pin').click(add.addNewPinToBoard);
};

export default { listeners };
