import React from 'react';
interface State {
  component: null | React.ComponentClass;
}

// tslint:disable-next-line:no-any
function dynamicLoad(importComponent: any) {
  class DynamicLoad extends React.Component {
    state: State = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return DynamicLoad;
}
const Routes: any[] = [
  {
    component: dynamicLoad(() => import('./pages/home')),
    name: 'home',
    path: '/home'
  }
];

export default Routes;