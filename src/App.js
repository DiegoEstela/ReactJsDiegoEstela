import "./App.css";
import "./components/Apis/ItemList";
import { NabVar } from "./components/NabVar/NabVar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Novedades } from "./components/Novedades/Novedades";
import { Item } from "./components/Productos/Item";

export function App() {
  return (
    <div className="App">
      <NabVar />
      <ItemListContainer />
      <Novedades />
      <Item />
    </div>
  );
}
