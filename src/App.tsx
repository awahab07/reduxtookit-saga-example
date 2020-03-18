import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Grid';
import UserContainer from './components/User/UserContainer';
import { makeStyles, createStyles, Theme, StyleRules } from '@material-ui/core/styles';
import store from './store/store';

const useStyles = makeStyles((theme: Theme): StyleRules =>
  createStyles({
    main: {
      flexGrow: 1,
      minHeight: '100vh',
    },
  }));

const App = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Router>
        <Container className={classes.main}>
          <Switch>
            <Route path="/user/:userId">
              <UserContainer/>
            </Route>
            <Redirect exact={true} from="/" to="/user/1" />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
