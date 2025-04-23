import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {
  const [contador,setContador] = useState(3);


const handleAddCarinho = () => {
  setContador(contador + 1);
}

  return (
    <>
      <Header contadorJogos={contador} />
      <Promotion />
    <button onClick={handleAddCarinho}>+1</button>
    </>
  );
}

export default App;