import React, { Component } from 'react';
import './App.css';
import AllContacts from "./containers/AllContacts";
import Header from "../src/components/Header/Header";
import {Switch, Route} from "react-router-dom";
import ContactCreator from "./containers/ContactCreator/ContactCreator";
import ContactEditor from "./components/ContactEditor/ContactEditor";



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route path="/pages/contacts" exact component={AllContacts}/>
              <Route path="/pages/:id" exact component={ContactCreator}/>
              <Route path="/editor" exact component={ContactEditor}/>
          </Switch>
      </div>
    );
  }
}

export default App;
