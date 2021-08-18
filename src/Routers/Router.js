import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NabVar } from "../components/NabVar/NabVar";
import { Home } from "../components/Home/Home";
import { Novedades } from "../components/Novedades/Novedades";
import Cart from "../components/Cart/Cart";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <NabVar />
      <Home />
      <Switch>
        <Route exact path="/" component={Novedades} />
        <Route exact path="/Cart" component={Cart} />
        <Route path="/ItemList">
          <ItemListContainer />
        </Route>
        <Route path="/product/:productID" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;