import React, { useState } from 'react';
import './ChatResponse.css'; // Add styles for the chat window
import Response from './Response';
import type { ResponseProps } from './ResponseProps';

const ChatResponse: React.FC = () => {

    const [messages, setMessages] = useState<ResponseProps[]>([
        { query: { sender: "user", text: "dasd" } },
        { 
            query: { 
                sender: "bot", 
                sqlQuery: "SELECT * FROM users", 
                sqlQueryExplanation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aperiam architecto ab rerum consequuntur esse incidunt. Quia ab beatae totam sequi veritatis similique eaque obcaecati hic quod quas. Eius, optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aperiam architecto ab rerum consequuntur esse incidunt. Quia ab beatae totam sequi veritatis similique eaque obcaecati hic quod quas. Eius, optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aperiam architecto ab rerum consequuntur esse incidunt. Quia ab beatae totam sequi veritatis similique eaque obcaecati hic quod quas. Eius, optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aperiam architecto ab rerum consequuntur esse incidunt. Quia ab beatae totam sequi veritatis similique eaque obcaecati hic quod quas. Eius, optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aperiam architecto ab rerum consequuntur esse incidunt. Quia ab beatae totam sequi veritatis similique eaque obcaecati hic quod quas. Eius, optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aperiam architecto ab rerum consequuntur esse incidunt. Quia ab beatae totam sequi veritatis similique eaque obcaecati hic quod quas. Eius, optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aperiam architecto ab rerum consequuntur esse incidunt. Quia ab beatae totam sequi veritatis similique eaque obcaecati hic quod quas. Eius, optio.", 
                resultsTable: { 
                    headers: ["ID", "Name", "Email"], 
                    rows: [["1", "John Doe", "john@example.com"], ["2", "Jane Doe", "jane@example.com"],["2", "Jane Doe", "jane@example.com"],["2", "Jane Doe", "jane@example.com"],["2", "Jane Doe", "jane@example.com"]] 
                }, 
                resultsTableExplanation: "This table contains the data retrieved by the query.", 
                chart: "Bar chart representing user data", 
                chartData: { 
                    labels: ["John Doe", "Jane Doe"], 
                    datasets: [ 
                        { 
                            label: "User Data", 
                            data: [1, 2], 
                            backgroundColor: ["#FF6384", "#36A2EB"] 
                        } 
                    ] 
                } 
            } 
        }
    ]);
    

    const testData: ResponseProps[] = [
        {
            query: { sender: 'user', text: 'What is the total revenue?' }
        },
        {
            query: {
                sender: 'bot',
                sqlQuery: 'SELECT SUM(revenue) FROM sales',
                sqlQueryExplanation: 'This query calculates the total revenue from the sales table.',
                resultsTable: {
                    headers: ['Total Revenue'],
                    rows: [['$500,000']]
                },
                resultsTableExplanation: 'This table shows the total revenue calculated from the sales data.',
                chart: 'Pie chart representing revenue distribution',
                chartData: {
                    labels: ['Product A', 'Product B', 'Product C'],
                    datasets: [
                        {
                            label: 'Revenue Distribution',
                            data: [200000, 150000, 150000],
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                        }
                    ]
                }
            }
        }
    ];

    return (
        <div className="chat-messages">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`chat-message ${message.query?.sender === 'user' ? 'user' : 'bot'}`}
                >
                    {/* {message.sender === 'user' && (
                        <Response query={message}></Response>
                    )} */}
                    {message.query?.sender === 'bot' && (
                        <Response query={message.query}></Response>
                    )}
                    
                </div>
            ))}
        </div>
    );
};

export default ChatResponse;