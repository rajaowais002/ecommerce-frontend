import React, { useState } from 'react';
import './ChatWidget.css';


const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const parseAIResponse = (text) => {
        return {
            text,
            containsProductInfo: text.includes('specs') || text.includes('features'),
        };
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim() === '' || isLoading) return;

        // Add user message
        const userMessage = { text: inputMessage, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);
        console.log(inputMessage);
        console.log(messages);

        try {
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputMessage,
                    chatHistory: messages
                })
            });

            const data = await response.json();

            if (data.success) {
                setMessages(prev => [...prev, data.message]);
            } else {
                throw new Error(data.error);
            }

        } catch (error) {
            console.error('API Error:', error);
            setMessages(prev => [...prev, {
                text: error.message || "Sorry, I'm having trouble. Please try again later.",
                sender: 'ai'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
            <div className="chat-icon" onClick={toggleChat}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </div>

            {isOpen && (
                <div className="chat-container">
                    <div className="chat-header">
                        <h3>Mobile Phone Assistant</h3>
                        <button onClick={toggleChat} className="close-chat">×</button>
                    </div>

                    <div className="chat-messages">
                        {messages.length === 0 ? (
                            <div className="welcome-message">
                                <p>Hello! How can I help you with your mobile phone needs today?</p>
                            </div>
                        ) : (
                            messages.map((message, index) => (
                                <div key={index} className={`message ${message.sender} ${isLoading && index === messages.length - 1 ? 'typing' : ''}`}>
                                    {message.text}
                                    {message.sender === 'ai' && (
                                        <span className="message-time">
                                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type your message..."
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;