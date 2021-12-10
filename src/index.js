import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import Context from './Context';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: 'https:
  request: (operation) => {
    const token = window.sessionStorage.getItem('token');
    const authorization = token ? `JWT ${token}` : '';
    operation.setContext({
      headers: {
        authorization
      }
    });
  },
  onError: (error) => {
    const { networkError } = error;
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token');
      window.location.href = '/';
    }
  }
});
ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
