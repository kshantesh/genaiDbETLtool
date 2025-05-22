import React, { useState } from 'react';
import './Sidebar.css'; // Add your CSS styles here

const Sidebar: React.FC = () => {
    const [chats, setChats] = useState<string[]>([]);
    const [activeChat, setActiveChat] = useState<number | null>(null);

    const addChat = () => {
        const newChatTitle = `Chat ${chats.length + 1}`;
        setChats([...chats, newChatTitle]);
        setActiveChat(chats.length); // Set the new chat as active
    };

    const selectChat = (index: number) => {
        setActiveChat(index);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>ChatGPT Sidebar</h2>
                <button onClick={addChat}>+</button>
            </div>
            <div className="chat-list">
                {chats.map((chat, index) => (
                    <div
                        key={index}
                        className={`chat-title ${activeChat === index ? 'active' : ''}`}
                        onClick={() => selectChat(index)}
                    >
                        {chat}
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Sidebar;