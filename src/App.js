import "./App.css";
import "./components/Apis/ItemList";
import { NabVar } from "./components/NabVar/NabVar";
import { Home } from "./components/Home/Home";
import { Novedades } from "./components/Novedades/Novedades";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

export function App() {
  return (
    <div className="App">
      <NabVar />
      <Home />
      <Novedades />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}
