import * as React from 'react';
import appStore from './App.store';
import { Provider } from 'mobx-react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history, routerStore } from './history';
import Routes from './routes';

const AnyRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path = '/'
        render = {props => (
          <Redirect to="/home" />
        )}
      />
      {
        Routes.map((V: any) => (
          <Route
            exact
            path = {V.path}
            render = {props => (
              <V.component { ...props }/>
            ) }
          />
        ))
      }
    </Switch>
  )
}

class App extends React.Component {
  render() {
    return (
      <Provider appStore = { appStore } routerStore = { routerStore }>
        <Router history={history}>
          <Route component = { AnyRoute }/>
        </Router>
      </Provider>
    );
  }
}

export default App;
