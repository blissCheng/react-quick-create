import * as React from 'react';
import { Provider } from 'mobx-react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import homeStore from './home.store';

const HomeProvider = () => (
  <Provider homeSore={ homeStore }>
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