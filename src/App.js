import React from 'react';
import Input from "./Components/Input";
import NewInput from "./Components/NewInput";
import Help from "./Components/Help"
import Proccess from "./Components/Process";
import TrainTheModel from "./Components/TrainTheModel";
import About from "./Components/About";
import { createBrowserHistory } from "history";
import NotFound from "./Components/NotFound";
import { HashRouter,Switch,Route } from "react-router-dom";

import './App.css';
const customHistory = createBrowserHistory();
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <HashRouter history={customHistory}> 
              <Switch>
                <Route exact path="/">
                  <Input></Input>
                </Route>
                <Route exact path="/Amazon-qc">
                  <Input></Input>
                </Route>
                <Route exact path="/input">
                  <NewInput></NewInput>
                </Route>
                <Route exact path="/process">
                  <Proccess></Proccess>
                </Route>
                <Route exact path="/help">
                  <Help></Help>
                </Route>
                <Route exact path="/about">
                  <About></About>
                </Route>
                <Route exact path="/train">
                  <TrainTheModel></TrainTheModel>
                </Route>
                <Route>
                  <NotFound></NotFound> 
                </Route>
              </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
