import { useState } from 'react'
import './App.css'
import Sidebar from './sidebar/Sidebar'
import ChatInput from './chatinput/ChatInput'
import SQLResponse from './chatResponse/Response'
import ChatResponse from './chatResponse/ChatResponse'

function App() {

  // Choose the source of the query
  // Uncomment one of the following lines based on your requirement:
  // fetchQuery(); // To fetch from an API
  // loadQuery();  // To load from a JSON file or hardcoded value
  return (
    <div className = 'webpage'>
      <div className = 'side-bar'>
        <Sidebar></Sidebar>
      </div>
      <div className = 'main-content'>
        <div className = 'chat-content'>
        {/* <SQLResponse query={query}></SQLResponse> */}
        <ChatResponse></ChatResponse>
        </div>
        <div className='chat-input'>
          <ChatInput></ChatInput>
        </div>
      </div>
      
    </div>
  )
}

export default App
