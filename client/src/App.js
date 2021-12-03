import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import CreateEventForm from './components/NavBar/createEventModal/createEventModal';

import NavBarContainer from './components/NavBar/NavBarContainer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBarContainer />
        <Switch>
          <Route exact path='/' component={Main} />
          {/* Event form is temporary for creation */}
          <Route exact path='/createEvent' component={CreateEventForm} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
