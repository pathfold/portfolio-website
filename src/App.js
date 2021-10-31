import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header"
import Landing from "./pages/Landing"
import "./styles/main.scss";

export default class App extends React.Component {
  state = {
    title: ""
  }

  updateTitle(t) {
    this.setState({title: t});
    document.title = t;
  }

  render() {
    this.updateTitle = this.updateTitle.bind(this);

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route>
            <Landing updateTitle={this.updateTitle}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}