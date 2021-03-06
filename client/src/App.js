import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import GlobalProvider from './utils/redux/GlobalContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import NavBarContainer from './components/NavBar/NavBarContainer';
import './styles/app.css';
import SingleEvent from './pages/singleEvent';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('id_token');
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
  // This can return lat and lon from user location
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log('latitude: ', position.coords.latitude);
  //   console.log('longitude: ', position.coords.longitude);
  // });

  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <Router>
          <NavBarContainer />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/event/:id' component={SingleEvent}/>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </GlobalProvider>
    </ApolloProvider>
  );
}
