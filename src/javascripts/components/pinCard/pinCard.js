import './pinCard.scss';

const printPinCards = (pin) => {
  let domString = '';
  domString += `
  <div class="card col-3 single-pin" id="${pin.id}">
  <h5 class="card-title">${pin.name}</h5>
    <img src=${pin.imageUrl} class="card-img-top pinImg" alt="Image of ${pin.name}">
    <div class="card-body">
      <p>${pin.description}</p>
    <button class="btn btn-outline-danger deletePinButton" id="${pin.id}">Delete Pin</button>
    <button type="button" class="btn btn-primary updatePinAndBoard" id="update-${pin.id}" data-toggle="modal" data-target="#updatePinModal">
    Move Pin
    </button>
    </div>
  </div>
  `;
  return domString;
};

export default { printPinCards };
