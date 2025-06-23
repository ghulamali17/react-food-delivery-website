import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import UserContext from './context/userContext.jsx';
import { store } from './Redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <UserContext>
        <App />
      </UserContext>
    </Provider>
  </StrictMode>
);
