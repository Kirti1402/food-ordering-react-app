import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { MenuProvider } from './onlineFoodOrdering/context/menuDetailFetchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

    <MenuProvider>
          <App />

        </MenuProvider>
   
    </Router>
  </React.StrictMode>
);


