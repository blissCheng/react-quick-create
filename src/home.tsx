import * as React from 'react';
import logo from './logo.svg';
import { AppStore } from './App.store';
import { observer, inject } from 'mobx-react';

interface Props {
  appStore: AppStore;
}
@observer
@inject('appStore')
class Home extends React.Component<Props> {
  appStore: AppStore;

  constructor(props: Props) {
    super(props);
    this.appStore = props.appStore!;
  }

  render() {
    const { title } = this.appStore
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
    );
  }
}

export default Home;
