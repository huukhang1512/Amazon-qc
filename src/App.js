import React from 'react';
import Input from "./Components/Input";
import Proccess from "./Components/Proccess";
import Output from "./Components/Output";
import { createBrowserHistory } from "history";
import NotFound from "./Components/NotFound";

import { Router,Switch,Route } from "react-router-dom";

import './App.css';

function App() {
  const customHistory = createBrowserHistory();
  return (
    <div className="App">
      <Router history={customHistory}> 
          <div>
            <Switch>
              <Route exact path="/">
                <Input></Input>
              </Route>
              <Route exact path="/return">
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

export default App;
