import './pins.scss';
import pinsData from '../../helpers/data/pinsData';
// import board from '../boards/board';
// import pCard from '../pinCard/pinCard';
import utilities from '../../helpers/utilities';
// import utilities from '../../helpers/utilities';

const getUserPins = (boardId) => new Promise((resolve, reject) => {
  let domString = '';
  pinsData.getPinsByBoardId(boardId)
    .then((pins) => {
      pins.forEach((pin) => {
        if (boardId === pins.boardId) {
          domString += `<img src=${pin.imageUrl} class="card-img-top" alt="...">`;
        } else {
          domString += '';
        }
        resolve(domString);
        utilities.printToDom('#pins', domString);
      })
        .catch((error) => reject(error));
    });
});

export default { getUserPins };
