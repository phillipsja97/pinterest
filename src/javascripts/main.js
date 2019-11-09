import firebase from 'firebase';
import apiKey from './helpers/apiKeys.json';
import auth from './components/Auth/Auth';
import authData from './helpers/data/authData';
import nav from './components/MyNavBar/myNavBar';
import event from './helpers/listeners/eventlisteners';
// import pin from './helpers/data/pinsData';
// import pCard from './components/pinCard/pinCard';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKey.firebaseConfig);
  auth.printLogIn();
  authData.checkLoginStatus();
  nav.logoutEvent();
  event.listeners();
  // pin.getPinsByBoardId();
  // pCard.pinCard();
};

init();
