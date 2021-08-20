import "./App.css";
import "./components/Apis/ItemList";
import { CartContext } from "./context/cartContext";
import Router from "./Routers/Router";

export function App() {
  return (
    <div className="App">
      <CartContext.Provider value={[]}>
        <Router />
      </CartContext.Provider>
    </div>
  );
}
