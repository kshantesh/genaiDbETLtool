import React, { useState } from 'react';
import './ChatInput.css'; // Optional: Add styles for the input box

const ChatInput: React.FC = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log('Message sent:', message);
            setMessage('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-input-container">
            <input
                type="text"
                className="chat-input"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button className="send-button" onClick={handleSendMessage}>
                Send
            </button>
        </div>
    );
};

export default ChatInput;