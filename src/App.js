import "./App.css";
import { NabVar } from "./components/NabVar/NabVar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Novedades } from "./components/Novedades/Novedades";

export function App() {
  return (
    <div className="App">
      <NabVar />
      <ItemListContainer />
      <Novedades />
    </div>
  );
}
