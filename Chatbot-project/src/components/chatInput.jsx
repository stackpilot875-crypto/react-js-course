import { useState} from 'react'
import { Chatbot } from 'supersimpledev';
import './chatInput.css';

export function ChatInput({ messages, setMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  function sendMessage() {
    const response = Chatbot.getResponse(inputText)

    setMessages([
      ...messages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
      {
        message: response,
        sender: 'chatbot',
        id: crypto.randomUUID(),
      },
    ])

    setInputText('')
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Type your message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  )
}
