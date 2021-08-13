import { inject, observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";

import { Header } from "./components/header/Header";

import AppStore from "./Store";
import HomePage from './pages/home/home';

@inject("appStore")
@observer
export default class App extends React.Component<{
  appStore?: AppStore;
}> {
  render() {
    return (
      <BrowserRouter>
        <Header title="Where in the world?"/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
