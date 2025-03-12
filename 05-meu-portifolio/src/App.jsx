import "./App.css";
import foto from "./img/fotodeperfil.jpeg";
import Perfil from "./components/perfil/Perfil";
import Links from "./components/links/link";
import SocialLinks from "./components/social/SocialLinks";
import Rodape from "./components/rodape/Rodape";

function App() {
  return (
    <div id="App">
      <Perfil fotoPerfil={foto}>@ÍtaloFrancesco</Perfil>

      <div id="sobreMim">
        <p>Oi! Sou o Ítalo, tenho 17 anos e moro em Jaú, SP 😊. Estou no ensino médio com um curso integrado de Desenvolvimento de Sistemas 💻, meu sonho é fazer faculdade de Fisioterapia e ajudar as pessoas a viverem melhor! 💪💖</p>
      </div>
      <ul>
        <Links link={"https://www.linkedin.com/in/%C3%ADtalo-francesco-aa9a76355/"}>Sobre Mim</Links>
        <Links link={"https://www.soufisio.com.br/"}>
          Atualidades sobre Fisioteraia
        </Links>
        <Links link={"https://w.app/mkhvut"}>
          Entre em contato comigo
        </Links>
      </ul>

      <div id="socialLinks">
        <SocialLinks link={"https://instagram.com"} icon={"logo-instagram"} />
        <SocialLinks link={"https://www.linkedin.com/in/%C3%ADtalo-francesco-aa9a76355/"} icon={"logo-linkedin"} />
      </div>
      <Rodape>Ítalo Francesco</Rodape>
    </div>
  );
}

export default App;
