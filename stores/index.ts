import { useStaticRendering } from "mobx-react";
import stores from "./stores";

const isServer = typeof window === "undefined";

useStaticRendering(isServer);

let store: any = null;

export class Store {
  [key: string]: any;
  constructor(initialState: any = {}) {
    for (const i in stores) {
      if (stores.hasOwnProperty(i)) {
        this[i] = new stores[i](initialState[i]);
      }
    }
  }
}

export const initializeStore = (initialState = {}) => {
  if (isServer) {
    return new Store(initialState);
  }
  if (store === null) {
    store = new Store(initialState);
  }

  return store;
};
