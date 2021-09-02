import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NabVar } from "../components/NabVar/NabVar";
import { Home } from "../components/Home/Home";
import { Novedades } from "../components/Novedades/Novedades";
import Cart from "../components/Cart/Cart";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "../Context/CartContext";
import { UserContextProvider } from "../Context/UserContext";

const Router = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserContextProvider>
          <NabVar />
          <Home />
          <Switch>
            <Route exact path="/" component={Novedades} />
            <Route path="/Cart" component={Cart} />
            <Route path="/ItemList" component={ItemListContainer} />
            <Route path="/product/:id" component={ItemDetailContainer} />
          </Switch>
        </UserContextProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default Router;
