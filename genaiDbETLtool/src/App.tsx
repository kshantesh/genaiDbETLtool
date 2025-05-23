
import './App.css'
import Sidebar from './sidebar/Sidebar'
import ChatInput from './chatinput/ChatInput'
import ChatResponse from './chatResponse/ChatResponse'
import { useMessageStore } from './store/MessageStore'
// import { useMessageStore } from './store/messageStore'


function App() {
  const messages = useMessageStore((state) => state.messages)

  return (
    <div className='webpage'>
      <div className='side-bar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <div className='chat-content'>
          <ChatResponse />
        </div>
        <div className='chat-input'>
          <ChatInput
            // addMessage={useMessageStore((state) => state.addMessage)}
            // setMessages={useMessageStore((state) => state.setMessages)}
            // clearMessages={useMessageStore((state) => state.clearMessages)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
