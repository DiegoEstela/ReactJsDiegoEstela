import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NabVar } from "../components/NabVar/NabVar";
import { Home } from "../components/Home/Home";
import Cart from "../components/Cart/Cart";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "../Context/CartContext";
import { UserContextProvider } from "../Context/UserContext";
import { Inicio } from "../components/Inicio/Inicio";
import { ListNovedades } from "../components/Novedades/ListNovedades";

const Router = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserContextProvider>
          <NabVar />
          <Home />
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/Cart" component={Cart} />
            <Route path="/ItemList" component={ItemListContainer} />
            <Route path="/Novedades" component={ListNovedades} />
            <Route path="/product/:id" component={ItemDetailContainer} />
          </Switch>
        </UserContextProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default Router;
