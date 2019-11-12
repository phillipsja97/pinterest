import $ from 'jquery';
import printP from '../../components/printPins/printPins';
import back from '../../components/backToBoards/backToBoards';
import d from '../../components/deletePins/deletePins';
import deleteB from '../../components/deleteBoard/deleteBoard';
import addP from '../../components/addNewPin/addNewPin';
import addB from '../../components/addNewBoard/addNewBoard';

const listeners = () => {
  $('body').on('click', '.print-pins-button', printP.getUserId);
  $('body').on('click', '#goBack', back.backToUsersBoards);
  $('body').on('click', '.deletePinButton', d.deletePinFromBoardByPinId);
  $('body').on('click', '.delete-board-button', deleteB.deleteBoardByBoardId);
  $('#add-new-pin').click(addP.addNewPinToBoard);
  $('#add-new-board').click(addB.addNewBoardByUser);
};

export default { listeners };
