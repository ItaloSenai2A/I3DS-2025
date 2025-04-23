import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {
  const [contador,setContador] = useState(0);


const handleAddCarinho = () => {
  setContador(contador + 1);
}

  return (
    <>
      <Header contadorJogos={contador} />
      <Promotion onAddCarrinho={handleAddCarinho} />
    </>
  );
}

export default App;