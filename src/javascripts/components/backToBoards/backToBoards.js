import $ from 'jquery';
import printB from '../printBoards/printBoards';

const backToUsersBoards = (uid) => {
  $('#board').removeClass('hide');
  printB.makeABoard(uid);
  $('#pins').hide();
};

export default { backToUsersBoards };
