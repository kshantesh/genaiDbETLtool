import React, { useState } from 'react';
import './ChatInput.css'; // Optional: Add styles for the input box
import type { ResponseProps } from '../chatResponse/ResponseProps';
import { useMessageStore } from '../store/MessageStore';
import { DummyResponseService, type IResponseService } from '../service/GetResposneFromServer';
// import { DummyResponseService } from '../services/DummyResponseService';
// import type { IResponseService } from '../services/IResponseService';

const ChatInput: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    const addMessage = useMessageStore((state) => state.addMessage);
    const setMessages = useMessageStore((state) => state.setMessages);
    const clearMessages = useMessageStore((state) => state.clearMessages);
    const getMessages = useMessageStore((state) => state.getMessages);

    const handleSendMessage = () => {
        addMessage({ query: { sender: 'user', text: message } }); // Use correct ResponseProps structure
        const messages = getMessages();
        setMessage('');
        // Dummy loosely coupled service call
        const responseService: IResponseService = new DummyResponseService();

        responseService.getData().then((data) => {
            // You can use setMessages to update the store with the response
            data.forEach((msg) => addMessage(msg));
        });
        console.log(messages);
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
            <button className="clear-button" onClick={clearMessages}>
                Clear
            </button>
        </div>
    );
};

export default ChatInput;