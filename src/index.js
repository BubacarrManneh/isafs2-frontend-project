import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux' 
import './index.css';
import App from './App';
import storeFactory from './Redux/store'
// import reportWebVitals from './reportWebVitals'

const reduxStore = storeFactory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      {/* <Router> */}
          <App />
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
