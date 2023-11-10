import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from 'components/theme'
import { Provider } from 'react-redux';
import { store} from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
