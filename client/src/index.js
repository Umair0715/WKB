import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './utilities.css';
import App from './App';
import DrawerContextProvider from 'context/DrawerContext';
import "react-datepicker/dist/react-datepicker.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DrawerContextProvider>
            <App />
        </DrawerContextProvider>
    </React.StrictMode>
);

