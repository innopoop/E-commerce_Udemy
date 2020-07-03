import React from "react";
import Shop from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header-component";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/*exact means you need exactly this ending of the url for it to route
         It will render all of the Routes that have that path match
         Switch will make it so that ONLY ONE of the routes will be rendered and
         ONLY THE FIRST ONE*/}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
