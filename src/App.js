import "./App.css";
import { NabVar } from "./components/NabVar/NabVar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Novedades } from "./components/Novedades/Novedades";
import { Productos } from "./components/Productos/Productos";

export function App() {
  return (
    <div className="App">
      <NabVar />
      <ItemListContainer />
      <Novedades />
      <Productos />
    </div>
  );
}
