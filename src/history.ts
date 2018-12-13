import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import createHistory from 'history/createBrowserHistory';

const routerStore = new RouterStore();
const browserHistory = createHistory();

const history = syncHistoryWithStore(browserHistory, routerStore);

export {
  routerStore,
  history
}