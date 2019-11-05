import firebase from 'firebase';
import apiKey from './helpers/apiKeys.json';
import auth from './components/Auth/Auth';
import authData from './helpers/data/authData';
import nav from './components/MyNavBar/myNavBar';
import machine from './components/machine/machine';
import pin from './helpers/data/pinsData';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKey.firebaseConfig);
  auth.printLogIn();
  authData.checkLoginStatus();
  nav.logoutEvent();
  machine.buildTheMachine();
  pin.getPins('QrT0kIUFSbc27wpoOS7DP1P7cWe2');
};

init();
