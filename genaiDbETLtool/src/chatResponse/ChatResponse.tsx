import React, { useState } from 'react';
import './ChatResponse.css'; // Add styles for the chat window
import Response from './Response';
import type { ResponseProps } from './ResponseProps';
import { useMessageStore } from '../store/MessageStore';

const ChatResponse: React.FC = () => {
    const addMessage = useMessageStore((state) => state.addMessage);
    const setMessage = useMessageStore((state) => state.setMessages);
    const clearMessages = useMessageStore((state) => state.clearMessages);
    const getMessages = useMessageStore((state) => state.getMessages);
    
    const [messages, setMessages] = useState<ResponseProps[]>([]);

    React.useEffect(() => {
        const unsubscribe = useMessageStore.subscribe((state: { messages: ResponseProps[] }) => {
            setMessages(state.messages);
        });
        // Initialize with current messages
        setMessages(getMessages());
        return () => unsubscribe();
    }, []);

    return (
        <div className="chat-messages">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`chat-message ${message.query?.sender === 'user' ? 'user' : 'bot'}`}
                >
                    {message.query?.sender === 'user' && (
                        <Response query={message.query}></Response>
                    )}
                    {message.query?.sender === 'bot' && (
                        <Response query={message.query}></Response>
                    )}
                    
                </div>
            ))}
        </div>
    );
};

export default ChatResponse;