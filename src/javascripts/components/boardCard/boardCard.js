import firebase from 'firebase/app';
import 'firebase/auth';
import './boardCard.scss';

const boardCard = (boards) => {
  const getCurrentUid = () => firebase.auth().currentUser.uid;
  let domString = '';
  if (getCurrentUid) {
    domString += `
  <div class="card col-4 singleBoard" id="${boards.id}">
  <h5 class="card-title text-center">${boards.name}</h5>
  <div class="card-body">
  <img src=${boards.imageUrl} class="card-img-top" alt="...">
  <p class="card-text text-center">${boards.description}</p>
  </div>
  <button class="btn btn-primary print-pins-button" id="${boards.id}">Go to Board</button>
  <button class="btn btn-danger delete-board-button" id="${boards.id}">Delete This Board</button>
  </div>`;
  } else {
    domString += `
  <div class="card col-4">
  <h5 class="card-title text-center">EMPTY</h5>`;
  }
  return domString;
};

export default { boardCard };
