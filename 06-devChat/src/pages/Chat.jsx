import React, { useEffect, useRef, useState } from "react";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => props.socket.off("receive_message");
  }, [props.socket]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = () => {
    if (props.socket.author === "undefined") window.location.reload();
    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message);
    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div className="chat-container">
      <div className="chat-body">
        {messageList.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.authorId === props.socket.id ? "own-message" : "other-message"
            }`}
          >
            <div className="chat-author">{message.author}</div>
            <div className="chat-text">{message.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-container">
        <input
          ref={messageRef}
          type="text"
          placeholder="Digite sua mensagem..."
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="chat-input"
        />
        <button onClick={handleSubmit} className="chat-send-button">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
