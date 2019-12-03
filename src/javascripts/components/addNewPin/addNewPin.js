import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import printP from '../printPins/printPins';
import pinData from '../../helpers/data/pinsData';
import boardsData from '../../helpers/data/boardData';
import utilities from '../../helpers/utilities';

const addNewPinToBoard = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  $('.addPinOnBoard').find('id');
  const boardId = $('#board').find('.singleBoard').attr('id');
  const newPin = {
    name: $('#pin-name').val(),
    imageUrl: $('#image-url').val(),
    siteUrl: $('#site-link').val(),
    description: $('#pin-description').val(),
    uid,
    boardId,
  };
  pinData.addNewPin(newPin)
    .then(() => {
      $('#exampleModal').modal('hide');
      printP.printUserPins(boardId);
    })
    .catch((error) => console.error(error));
};

// const preFillTheUpdate = (event) => {
//   const boardId = $('.addPinOnBoard').attr('id');
//   const pinId = event.target.id.split('update-')[1];
//   console.log('pinId', pinId);
//   pinData.getPinByPinId(pinId)
//     .then((response) => {
//       console.log(response);
//       $('#updatePinModal').modal('show');
//       const pin = response.data;
//       $('#update-pin-name').val(pin.name);
//       $('#update-image-url').val(pin.imageUrl);
//       $('#update-site-link').val(pin.siteUrl);
//       $('#update-pin-description').val(pin.description);
//       $('.updatePinLocation').attr('id', pinId);
//       $('.custom-control custom-radio').attr('id', boardId);
//     })
//     .catch((error) => console.error(error));
// };

const updatePinOnBoard = (event) => {
  boardsData.getBoards()
    .then((boards) => {
      console.log('boards', boards);
      let domString = '';
      domString += `
              <form>
                <div class="form-group">
                <label for="exampleFormControlSelect1">Move To New Board</label>
                <select class="form-control" id="exampleFormControlSelect1">`;
      boards.forEach((board) => {
        domString += `<option value="${board.id}">${board.name}</option>`;
      });
      domString += `
            </select>
            </div>
            </form>
                  `;
      const pinId = event.target.id.split('update-')[1];
      pinData.getPinByPinId(pinId)
        .then((response) => {
          const pin = response.data;
          console.log(pin);
          $('#edit-pin-name').val(pin.name);
          $('#edit-pin-description').val(pin.description);
          $('#edit-pin-image').val(pin.imageUrl);
          $('#edit-pin-site').val(pin.siteUrl);
        });
      utilities.printToDom('switch-board-div', domString);
    })
    .catch((error) => console.error(error));
};

const moveThePinToNewBoard = (event) => {
  event.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const pinId = $('#pins').find('.single-pin').attr('id');
  const boardId = $('#exampleFormControlSelect1').val();
  // pinData.getPins()
  //   .then((response) => {
  //     const pin = response.data;
  const pinCopy = {
    name: $('#edit-pin-name').val(),
    imageUrl: $('#edit-pin-image').val(),
    siteUrl: $('#edit-pin-site').val(),
    description: $('#edit-pin-description').val(),
    boardId,
    uid,
  };
  // console.log('pins', pin);
  pinData.updatePin(pinId, pinCopy)
    .then(() => {
      $('#switchBoardModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      printP.printUserPins(boardId)
        .catch((error) => (error));
    });
};

export default { addNewPinToBoard, updatePinOnBoard, moveThePinToNewBoard };
