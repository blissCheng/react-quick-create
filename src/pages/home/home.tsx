import * as React from 'react';
import { HomeStore } from './home.store';
import { RouteComponentProps } from 'react-router-dom';
import { AppStore } from '../../App.store';
import { observer, inject } from 'mobx-react';
import logo from '../../logo.svg';

interface Props {
  homeStore?: HomeStore
  appStore?: AppStore
  routerStore?: RouteComponentProps
}
@observer
@inject('appStore', 'routerStore', 'homeStore')
class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { title } = this.props.appStore!;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{ title }</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home