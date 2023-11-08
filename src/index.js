import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from 'components/theme'
import { Provider } from 'react-redux';
import { persistor, store} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
        <App />
    <GlobalStyle />
    </ThemeProvider>
      </PersistGate>
      
    </Provider>
  </React.StrictMode>
);
