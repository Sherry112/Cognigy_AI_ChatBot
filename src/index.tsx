import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";
import useStyles from "./customStyles";
import API from "./ChatbotAPI";
import Header from "./components/Header";
import './styles.css';
function Chatbot() {
  const classes = useStyles();
  const [messages, setMessages] = useState([]) as any;

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />,
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async (text: string) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className={classes.chatbot}>
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chatbot />, rootElement);
