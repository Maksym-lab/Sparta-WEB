import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: 'https:
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
