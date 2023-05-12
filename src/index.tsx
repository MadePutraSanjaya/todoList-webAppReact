import React from 'react';
import ReactDOM from 'react-dom/client';
import './template.css';
import App from './App/HomeScreen';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Reducer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={createStore(rootReducer)}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


