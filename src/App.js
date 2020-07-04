import React from 'react';
import "./App.css"
import { HomePage } from "./pages/Homepage/homepage.component"
import { Switch, Route } from 'react-router-dom';
import ShopPage from "./pages/Shop/shop.component";
import { Header } from "./components/header/header.component";
import { Authentication } from "./pages/Authentication/authentication.component"
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
