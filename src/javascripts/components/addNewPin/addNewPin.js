import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import printP from '../printPins/printPins';
import pinData from '../../helpers/data/pinsData';

const addNewPinToBoard = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const boardId = $('#board').find('.singleBoard').attr('id');
  console.log('boardId', boardId);
  const newPin = {
    name: $('#pin-name').val(),
    imageUrl: $('#image-url').val(),
    siteUrl: $('#site-link').val(),
    description: $('#pin-description').val(),
    uid,
    boardId,
  };
  console.log('newPin', newPin);
  pinData.addNewPin(newPin)
    .then(() => {
      $('#exampleModal').modal('hide');
      printP.printUserPins(boardId);
    })
    .catch((error) => console.error(error));
};

export default { addNewPinToBoard };
