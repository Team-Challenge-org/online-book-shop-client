import App from './App';
import ReactDOM from 'react-dom/client';

import { store } from 'store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalCartProvider } from 'contexts/ModalCartContext';

import 'index.scss';
import { BooksLogicProvider } from 'contexts/BooksContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { API_BASE_URL } from 'constants/api';

axios.defaults.baseURL = API_BASE_URL;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <GoogleOAuthProvider clientId='336704376321-ffc2vo7ostsru4udrskftmkt853imcc4.apps.googleusercontent.com'>
    <BrowserRouter>
      <Provider store={store}>
        <BooksLogicProvider>
          <ModalCartProvider>
            <App />
          </ModalCartProvider>
        </BooksLogicProvider>
      </Provider>
    </BrowserRouter>
  </GoogleOAuthProvider>,
);
