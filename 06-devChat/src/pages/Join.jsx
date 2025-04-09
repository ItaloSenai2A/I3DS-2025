import React, { useRef } from "react";
import io from "socket.io-client";


const Join = (props) => {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    const servidorSocket = await io.connect("http://192.168.10.123:3001");
    servidorSocket.emit("set_username", username);

    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
    <div className="join-container">
      <div className="join-box">
        <h1 className="join-title">Bem-vindo ao DevChat</h1>
        <p className="join-subtitle">Conecte-se com outros devs 💬📱</p>
        <div className="join-input-wrapper">
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            placeholder="Digite seu nome de usuário"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>
        <button
          className="join-button"
          onClick={handleSubmit}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
