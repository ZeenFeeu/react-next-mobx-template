import App, { AppContext } from "next/app";
import React from "react";
import { initializeStore, Store } from "../stores";
import { Provider } from "mobx-react";
import { Header, Footer } from "../components";

class MyMobxApp extends App {
  mobxStore: Store;

  static async getInitialProps(appContext: AppContext): Promise<any> {
    const ctx: any = appContext.ctx;
    ctx.mobxStore = initializeStore();
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: ctx.mobxStore,
    };
  }

  constructor(props: any) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps }: any = this.props;
    return (
      <Provider {...this.mobxStore}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    );
  }
}

export default MyMobxApp;
