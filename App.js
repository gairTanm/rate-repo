import React from 'react';
import Main from './components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from './utils/apolloClient';

const apolloClient = createApolloClient();

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}
