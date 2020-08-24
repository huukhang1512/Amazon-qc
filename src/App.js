import React from 'react';
import Input from "./Components/Input";
import Proccess from "./Components/Process";
import Output from "./Components/Output";
import { createBrowserHistory } from "history";
import NotFound from "./Components/NotFound";
import { Router,Switch,Route } from "react-router-dom";

import './App.css';
const customHistory = createBrowserHistory();
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router history={customHistory}> 
            <div>
              <Switch>
                <Route exact path="/">
                  <Input></Input>
                </Route>
                <Route exact path="/process">
                  <Proccess></Proccess>
                </Route>
                <Route exact path="/done">
                  <Output></Output>
                </Route>
                <Route>
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
