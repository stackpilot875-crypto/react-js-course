import { useRef, useEffect } from 'react'
import { ChatMessage } from './chatMessage';
import './chatMessages.css';

function Messages({ messages }) {
  const messagesContainerRef = useRef(null)

  useEffect(() => {
    const messagesContainer = messagesContainerRef.current
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }
  }, [messages])

  return (
    <div className="messages-container" ref={messagesContainerRef}>
      {messages.map((msg) => {
        return (
          <ChatMessage
            key={msg.id}
            message={msg.message}
            sender={msg.sender}
          />
        )
      })}
    </div>
  )
}

export default Messages;