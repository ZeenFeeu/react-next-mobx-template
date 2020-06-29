export default class Base {
  [key: string]: any;

  constructor(initState: { [key: string]: any } = {}) {
    for (const i in initState) {
      if (initState.hasOwnProperty(i)) {
        this[i] = initState[i];
      }
    }
  }
}
