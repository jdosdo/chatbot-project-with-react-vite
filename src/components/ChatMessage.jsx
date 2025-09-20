import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css"

export function ChatMessage({ message, sender }) {
  // const message = props.message
  // const sender = props.sender
  // const { message, sender } = props

  /*
        if(sender === 'robot'){
          return(
            <div>
              <img src="/img-chatbot/robot.png" width="50"  />
              {message}
          </div>
          )
        }
        */

  // &&, a guard operator
  // syntax value1 && value2
  // if value1 is true, then do value2
  // basically like if statement, used to do if statement on jsx
  // as jsx cant do normal if
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
