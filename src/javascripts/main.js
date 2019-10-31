import firebase from 'firebase';
import apiKey from './helpers/apiKeys.json';
import auth from './components/Auth/Auth';
import authData from './helpers/data/authData';
import nav from './components/MyNavBar/myNavBar';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKey.firebaseConfig);
  auth.printLogIn();
  authData.checkLoginStatus();
  nav.logoutEvent();
};

init();
