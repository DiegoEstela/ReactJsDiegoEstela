import "./App.css";
import { NabVar } from "./components/NabVar/NabVar.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

export function App() {
  return (
    <div className="App">
      <NabVar />
      <ItemListContainer />
    </div>
  );
}
