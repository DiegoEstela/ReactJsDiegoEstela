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
import { Login } from "../components/Auth/Login";
import { SignUp } from "../components/Auth/SignUp";
import { PrivateRoute } from "../components/Auth/PrivateRoute";
import { AuthProvider } from "../Context/AuthContext";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <UserContextProvider>
            <NabVar />
            <Home />
            <Switch>
              <PrivateRoute exact path="/" component={Inicio} />
              <PrivateRoute path="/Cart" component={Cart} />
              <Route path="/ItemList" component={ItemListContainer} />
              <Route path="/Novedades" component={ListNovedades} />
              <PrivateRoute
                path="/product/:id"
                component={ItemDetailContainer}
              />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </UserContextProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
