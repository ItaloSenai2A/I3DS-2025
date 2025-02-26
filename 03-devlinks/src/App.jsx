
import "./App.css"
import foto from "./img/avatar.webp"

import Perfil from './components/perfil/Perfil';
import Switch from './components/switch/Switch';
import Links from "./components/links/link";
import SocialLinks from "./components/social/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight,setIsLight] = useState(true)

  const troca = () => {
    setIsLight(!isLight);  
  }

  return (
    <div id="App" className={isLight && "light"}>

    <Perfil fotoPerfil={foto}>
      @ÍtaloFrancesco
    </Perfil>
    <Switch troca={troca } isLight={isLight}/>
    <ul>
    <Links link={"https://github.com/ItaloSenai2A"}>GitHub</Links>
    <Links link={"https://instagram.com"}>Instagram</Links>
    <Links link={"https://github.com/ItaloSenai2A"}>Portifólio</Links>
    <Links link={"https://github.com/ItaloSenai2A"}>Projetos</Links>

    </ul>
    <div id="socialLinks">
<SocialLinks
link={"https://github.com/ItaloSenai2A"} 
icon={"logo-github"}
/>
<SocialLinks
link={"https://instagram.com"} 
icon={"logo-instagram"}
 />
<SocialLinks 
link={"https://youtube.com"} 
icon={"logo-youtube"}/>
<SocialLinks 
link={"https://linkedin.com"} 
icon={"logo-linkedin"}/>
    </div>
    <Rodape>ÍtaloFrancesco</Rodape>
    </div>
    
    
  )
}

export default App