import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import CustomRoutes from './Router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as firebase from 'firebase';
import {cyan500, grey900, pink500} from 'material-ui/styles/colors';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDepofnBDgzAi3fY9KlSCxeupqroevwjfI",
    authDomain: "shahzaib-com-app6.firebaseapp.com",
    databaseURL: "https://shahzaib-com-app6.firebaseio.com",
    projectId: "shahzaib-com-app6",
    storageBucket: "shahzaib-com-app6.appspot.com",
    messagingSenderId: "295560231124"
  };
  firebase.initializeApp(config);

  

  const myTheme =  getMuiTheme({
  palette: {
    textColor: grey900,
  },
});

ReactDOM.render(
  //Wraping up in Provider
  <Provider store={store}>
    <div>
    <MuiThemeProvider muiTheme={myTheme}>
      <CustomRoutes/>
      </MuiThemeProvider>
    </div>
  </Provider>
  ,
  document.getElementById('root')
);
