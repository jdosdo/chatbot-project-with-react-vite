import { useState } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import LoadingSpinner from "../assets/loading-spinner.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    event.key == "Enter" && sendMessage();
    event.key == "Escape" && setInputText("");
  }

  async function sendMessage() {
    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        time: dayjs().format("h:mm A"),
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: (
          <img className="chat-input-loading-img" src={LoadingSpinner} />
        ),
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        time: dayjs().format("h:mm A"),
        id: crypto.randomUUID(),
      },
    ]);
  }

  function clearMessages() {
    // localStorage.setItem("messages", [])
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button className="clear-button" onClick={clearMessages}>
        Clear
      </button>
    </div>
  );
}
