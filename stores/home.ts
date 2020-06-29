import { action, observable } from "mobx";
import Base from "./base";
export default class HomeStore extends Base {
  @observable name: string = "Clint";

  @action.bound
  setName(name: string) {
    this.name = name;
  }
}
