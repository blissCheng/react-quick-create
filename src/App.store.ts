import { observable, action } from 'mobx';

export class AppStore {
  //订阅一个状态
  @observable title: string = 'Welcome to React';
  //修改一个状态
  @action
  setTitle = (message: string) => {
    this.title = message;
  }
}

export default new AppStore();