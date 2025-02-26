
import "./App.css"

import Perfil from './components/perfil/Perfil';
import Switch from './components/switch/Switch';
import Links from "./components/links/link";
import SocialLinks from "./components/social/SocialLinks";
import Rodape from "./components/rodape/Rodape";

const App = () => {
  return (
    <div id="App" className="">
    <Perfil/>
    <Switch />
    <ul>
    <Links /> 
    <Links /> 
    <Links /> 
    <Links /> 
    </ul>
    <div id="socialLinks">
<SocialLinks />
<SocialLinks />
<SocialLinks />
<SocialLinks />
    </div>
    <Rodape />
    </div>
    
    
  )
}

export default App