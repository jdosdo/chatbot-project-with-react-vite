import { useAutoScroll } from "./useAutoScroll";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css"

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <>
      {chatMessages.length === 0 && (
        <p className="chat-messages-welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              time={chatMessage.time}
              key={chatMessage.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default ChatMessages;
