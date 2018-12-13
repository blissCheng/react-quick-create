import * as React from 'react';
import { Provider } from 'mobx-react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import homeStore from './home.store';
import Home from './home';

const HomeProvider = (props: any) => (
  <Provider homeStore={ homeStore }>
    <Home { ...props }/>
  </Provider>
);

const route = ({ match }: RouteComponentProps) => {
  return (
    <Switch>
      <Route exact path={ match.path } component={ HomeProvider }/>
    </Switch>
  )
};

export default route;