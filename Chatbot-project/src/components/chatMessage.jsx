import chatbotImage from '../assets/robot.png'
import userImage from '../assets/user.png'
import './chatMessage.css';

export function ChatMessage({ message, sender }) {
  return (
    <div className={sender === 'user' ? 'user-message' : 'chatbot-message'}>
      {sender === 'chatbot' && (
        <img src={chatbotImage} className="chat-message-avatar" alt="Robot avatar" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === 'user' && (
        <img src={userImage} className="chat-message-avatar" alt="User avatar" />
      )}
    </div>
  )
}