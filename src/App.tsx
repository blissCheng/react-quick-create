import * as React from 'react';
import appStore from './App.store';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './home';

const AnyRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path = '/'
        component = { Home }
      />
    </Switch>
  )
}

class App extends React.Component {
  render() {
    return (
      <Provider appStore = { appStore } >
        <Router history={history}>
          <Route component = { AnyRoute }/>
        </Router>
      </Provider>
    );
  }
}

export default App;
