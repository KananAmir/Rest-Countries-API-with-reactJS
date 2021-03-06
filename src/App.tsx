import { inject, observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import { Header } from "./components/header/Header";

import AppStore from "./Store";
import HomePage from './pages/home/home';
import CountryDetails from './pages/countryDetails/CountryDetails';

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
          {/* <Route component={() => <Redirect to="/" />} /> */}
          <Route path="/countries/:alpha2Code" component={CountryDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}
