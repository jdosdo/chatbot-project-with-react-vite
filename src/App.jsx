import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(
    localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : []
  );

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: "Goodbye. Have a great day!",
      "generate unique id": function () {
        return `Sure thing! Generating unique id: ${crypto.randomUUID()}`;
      },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  // const [chatMessages, setChatMessages] = array
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
