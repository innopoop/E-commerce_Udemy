import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  const HatsPage = () => <h1>HATS PAGE</h1>;
  return (
    <div>
      {/*exact means you need exactly this ending of the url for it to route
         It will render all of the Routes that have that path match
         Switch will make it so that ONLY ONE of the routes will be rendered and
         ONLY THE FIRST ONE*/}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
