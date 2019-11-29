import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import printP from '../printPins/printPins';
import pinData from '../../helpers/data/pinsData';

const addNewPinToBoard = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
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

const preFillTheUpdate = (event) => {
  const pinId = event.target.id.split('update-')[1];
  console.log('pinId');
  pinData.getPinByPinId(pinId)
    .then((response) => {
      console.log(response);
      $('#updatePinModal').modal('show');
      const pin = response.data;
      $('#update-pin-name').val(pin.name);
      $('#update-image-url').val(pin.imageUrl);
      $('#update-site-link').val(pin.siteUrl);
      $('#update-pin-description').val(pin.description);
      // $('.update-souvenir-button').attr('id', boardId);
    })
    .catch((error) => console.error(error));
};


export default { addNewPinToBoard, preFillTheUpdate };
