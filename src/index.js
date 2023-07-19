import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';


// Importing CSS 
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
  <App />
  </AuthContextProvider>
  

   
  </React.StrictMode>
);