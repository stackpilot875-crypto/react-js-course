import { useState} from 'react'
import { ChatInput } from './components/chatInput';
import Messages from './components/chatMessages';
import './App.css'




function App() {
  const [messages, setMessages] = useState([
    {
      message: 'Hello chatbot',
      sender: 'user',
      id: 'id1',
    },
    {
      message: 'hello! how can I help you?',
      sender: 'chatbot',
      id: 'id2',
    },
    {
      message: "can you get me today's date?",
      sender: 'user',
      id: 'id3',
    },
    {
      message: 'today is september 1st',
      sender: 'chatbot',
      id: 'id4',
    },
  ])

  return (
    <div className="app-container">
      <Messages messages={messages} />
      <ChatInput messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default App
